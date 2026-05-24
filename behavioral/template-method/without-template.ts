export class JSONDataProcessor {
  process() {
    console.log("Reading JSON file");

    console.log("Parsing JSON data");

    console.log("Validating data");

    console.log("Saving data to database");
  }
}

export class CSVDataProcessor {
  process() {
    console.log("Reading CSV file");

    console.log("Parsing CSV data");

    console.log("Validating data");

    console.log("Saving data to database");
  }
}

const jsonProcessor =
  new JSONDataProcessor();

jsonProcessor.process();

const csvProcessor =
  new CSVDataProcessor();

csvProcessor.process();
