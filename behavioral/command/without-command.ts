export class RedisServer {
  execute(command: string, args: string[]) {
    if (command === "SET") {
      console.log(
        `Setting ${args[0]} = ${args[1]}`
      );

      return;
    }

    if (command === "GET") {
      console.log(
        `Getting value for ${args[0]}`
      );

      return;
    }

    if (command === "DEL") {
      console.log(
        `Deleting key ${args[0]}`
      );

      return;
    }

    throw new Error("Unknown command");
  }
}

const server = new RedisServer();

server.execute("SET", ["name", "deepanshu"]);

server.execute("GET", ["name"]);
