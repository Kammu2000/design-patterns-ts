export class HttpClient {
  constructor(
    public baseURL: string,
    public timeout: number,
    public retries: number,
    public enableLogging: boolean,
    public enableMetrics: boolean
  ) {}
}

const client = new HttpClient(
  "https://api.example.com",
  5000,
  3,
  true,
  true
);

console.log(client);
