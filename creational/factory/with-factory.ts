interface Parser {
  parse(data: string): void;
}

export class JSONParser implements Parser {
  parse(data: string): void {
    console.log("Parsing JSON:", data);
  }
}

export class XMLParser implements Parser {
  parse(data: string): void {
    console.log("Parsing XML:", data);
  }
}

export class ParserFactory {
  static createParser(
    type: string
  ): Parser {

    switch (type) {
      case "json":
        return new JSONParser();

      case "xml":
        return new XMLParser();

      default:
        throw new Error(
          `Unsupported parser: ${type}`
        );
    }
  }
}

export class Application {
  process(type: string, data: string) {
    const parser =
      ParserFactory.createParser(type);

    parser.parse(data);
  }
}

const app = new Application();

app.process("json", '{"name":"deepanshu"}');
