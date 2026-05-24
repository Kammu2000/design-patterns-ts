interface Command {
  execute(args: string[]): void;
}

class SetCommand implements Command {
  execute(args: string[]): void {
    console.log(
      `Setting ${args[0]} = ${args[1]}`
    );
  }
}

class GetCommand implements Command {
  execute(args: string[]): void {
    console.log(
      `Getting value for ${args[0]}`
    );
  }
}

class DelCommand implements Command {
  execute(args: string[]): void {
    console.log(
      `Deleting key ${args[0]}`
    );
  }
}

class CommandRegistry {
  private commands = new Map<
    string,
    Command
  >();

  register(
    name: string,
    command: Command
  ) {
    this.commands.set(name, command);
  }

  get(name: string): Command {
    const command =
      this.commands.get(name);

    if (!command) {
      throw new Error(
        `Unknown command: ${name}`
      );
    }

    return command;
  }
}

class CommandDispatcher {
  constructor(
    private registry: CommandRegistry
  ) {}

  dispatch(
    commandName: string,
    args: string[]
  ) {
    const command =
      this.registry.get(commandName);

    command.execute(args);
  }
}

const registry = new CommandRegistry();

registry.register("SET", new SetCommand());

registry.register("GET", new GetCommand());

registry.register("DEL", new DelCommand());

const dispatcher =
  new CommandDispatcher(registry);

dispatcher.dispatch("SET", [
  "name",
  "deepanshu",
]);

dispatcher.dispatch("GET", ["name"]);
