export class DataCompressor {
  compress(data: string, algorithm: string): string {
    if (algorithm === "gzip") {
      console.log("Compressing using GZIP");
      return `gzip(${data})`;
    }

    if (algorithm === "brotli") {
      console.log("Compressing using Brotli");
      return `brotli(${data})`;
    }

    if (algorithm === "snappy") {
      console.log("Compressing using Snappy");
      return `snappy(${data})`;
    }

    throw new Error("Unknown compression algorithm");
  }
}

const compressor = new DataCompressor();

console.log(
  compressor.compress("distributed systems data", "gzip")
);
