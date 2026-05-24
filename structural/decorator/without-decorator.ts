export class DatabaseService {
  query(sql: string) {
    console.log(
      `Executing query: ${sql}`
    );
  }
}

export class LoggingDatabaseService {
  query(sql: string) {
    console.log(
      `[LOG] Query started`
    );

    console.log(
      `Executing query: ${sql}`
    );

    console.log(
      `[LOG] Query completed`
    );
  }
}

export class MetricsDatabaseService {
  query(sql: string) {
    console.log(
      `[METRICS] Recording metrics`
    );

    console.log(
      `Executing query: ${sql}`
    );
  }
}
