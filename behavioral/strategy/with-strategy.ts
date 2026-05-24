interface CompressionStrategy {
  compress(data: string): string;
}

class GzipCompression implements CompressionStrategy {
  compress(data: string): string {
    console.log("Compressing using GZIP");
    return `gzip(${data})`;
  }
}

class BrotliCompression implements CompressionStrategy {
  compress(data: string): string {
    console.log("Compressing using Brotli");
    return `brotli(${data})`;
  }
}

class SnappyCompression implements CompressionStrategy {
  compress(data: string): string {
    console.log("Compressing using Snappy");
    return `snappy(${data})`;
  }
}

export class DataCompressor {
  constructor(
    private strategy: CompressionStrategy
  ) {}

  setStrategy(strategy: CompressionStrategy) {
    this.strategy = strategy;
  }

  compress(data: string): string {
    return this.strategy.compress(data);
  }
}

const compressor = new DataCompressor(
  new GzipCompression()
);

console.log(
  compressor.compress("distributed systems data")
);

compressor.setStrategy(
  new BrotliCompression()
);

console.log(
  compressor.compress("distributed systems data")
);
