class JSONParser {
  parse(data: string) {
    console.log("Parsing JSON:", data);
  }
}

class XMLParser {
  parse(data: string) {
    console.log("Parsing XML:", data);
  }
}

class Application {
  process(type: string, data: string) {
    let parser;

    if (type === "json") {
      parser = new JSONParser();
    } else if (type === "xml") {
      parser = new XMLParser();
    } else {
      throw new Error(
        "Unsupported parser type"
      );
    }

    parser.parse(data);
  }
}

const app = new Application();

app.process("json", '{"name":"deepanshu"}');
