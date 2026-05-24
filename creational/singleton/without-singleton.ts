export class Logger {
  private logs: string[] = [];

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

const logger1 = new Logger();

const logger2 = new Logger();

logger1.log("Server started");

logger2.log("Database connected");

console.log(
  logger1.getLogs()
);

console.log(
  logger2.getLogs()
);


// if we are creating logger specifically for something in future then our state will not be synced as we have more than one logger
