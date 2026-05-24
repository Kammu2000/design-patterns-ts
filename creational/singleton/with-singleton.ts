export class Logger {
  private static instance: Logger;

  private logs: string[] = [];

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance =
        new Logger();
    }

    return Logger.instance;
  }

  log(message: string) {
    this.logs.push(message);

    console.log(
      `[LOG]: ${message}`
    );
  }

  getLogs() {
    return this.logs;
  }
}

const logger1 =
  Logger.getInstance();

const logger2 =
  Logger.getInstance();

logger1.log("Server started");

logger2.log("Database connected");

console.log(
  logger1.getLogs()
);

console.log(
  logger2.getLogs()
);

console.log(
  logger1 === logger2
);
