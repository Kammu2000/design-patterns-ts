abstract class DataProcessor {
  process() {
    this.read();

    this.parse();

    this.validate();

    this.save();
  }

  protected abstract read(): void;

  protected abstract parse(): void;

  protected validate(): void {
    console.log("Validating data");
  }

  protected save(): void {
    console.log("Saving data to database");
  }
}

export class JSONDataProcessor
  extends DataProcessor {

  protected read(): void {
    console.log("Reading JSON file");
  }

  protected parse(): void {
    console.log("Parsing JSON data");
  }
}

export class CSVDataProcessor
  extends DataProcessor {

  protected read(): void {
    console.log("Reading CSV file");
  }

  protected parse(): void {
    console.log("Parsing CSV data");
  }
}

const jsonProcessor =
  new JSONDataProcessor();

jsonProcessor.process();

const csvProcessor =
  new CSVDataProcessor();

csvProcessor.process();
