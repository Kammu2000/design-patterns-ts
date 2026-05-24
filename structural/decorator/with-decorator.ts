interface Database {
  query(sql: string): void;
}

class DatabaseService
  implements Database {

  query(sql: string): void {
    console.log(
      `Executing query: ${sql}`
    );
  }
}

abstract class DatabaseDecorator
  implements Database {

  constructor(
    protected database: Database
  ) {}

  query(sql: string): void {
    this.database.query(sql);
  }
}

class LoggingDecorator
  extends DatabaseDecorator {

  query(sql: string): void {
    console.log(
      "[LOG] Query started"
    );

    super.query(sql);

    console.log(
      "[LOG] Query completed"
    );
  }
}

class MetricsDecorator
  extends DatabaseDecorator {

  query(sql: string): void {
    const start = Date.now();

    super.query(sql);

    const end = Date.now();

    console.log(
      `[METRICS] Duration: ${end - start}ms`
    );
  }
}

class RetryDecorator
  extends DatabaseDecorator {

  query(sql: string): void {
    console.log(
      "[RETRY] Attempting query"
    );

    super.query(sql);
  }
}

const database =
  new RetryDecorator(
    new MetricsDecorator(
      new LoggingDecorator(
        new DatabaseService()
      )
    )
  );

database.query("SELECT * FROM users");
