export class HttpClient {
  constructor(
    public baseURL: string,
    public timeout: number,
    public retries: number,
    public enableLogging: boolean,
    public enableMetrics: boolean
  ) {}
}

class HttpClientBuilder {
  private baseURL = "";

  private timeout = 3000;

  private retries = 0;

  private enableLogging = false;

  private enableMetrics = false;

  setBaseURL(url: string) {
    this.baseURL = url;

    return this;
  }

  setTimeout(timeout: number) {
    this.timeout = timeout;

    return this;
  }

  setRetries(retries: number) {
    this.retries = retries;

    return this;
  }

  enableLogs() {
    this.enableLogging = true;

    return this;
  }

  enableMetricsCollection() {
    this.enableMetrics = true;

    return this;
  }

  build(): HttpClient {
    return new HttpClient(
      this.baseURL,
      this.timeout,
      this.retries,
      this.enableLogging,
      this.enableMetrics
    );
  }
}

const client =
  new HttpClientBuilder()
    .setBaseURL(
      "https://api.example.com"
    )
    .setTimeout(5000)
    .setRetries(3)
    .enableLogs()
    .enableMetricsCollection()
    .build();

console.log(client);
