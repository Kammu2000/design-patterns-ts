interface ConnectionState {
  connect(): void;

  send(data: string): void;

  disconnect(): void;
}

class TCPConnection {
  private state: ConnectionState;

  constructor() {
    this.state = new ClosedState(this);
  }

  setState(state: ConnectionState) {
    this.state = state;
  }

  connect() {
    this.state.connect();
  }

  send(data: string) {
    this.state.send(data);
  }

  disconnect() {
    this.state.disconnect();
  }
}

class ClosedState implements ConnectionState {
  constructor(
    private connection: TCPConnection
  ) {}

  connect(): void {
    console.log("Opening connection...");

    this.connection.setState(
      new ConnectedState(this.connection)
    );
  }

  send(): void {
    console.log(
      "Cannot send data while disconnected"
    );
  }

  disconnect(): void {
    console.log("Already disconnected");
  }
}

class ConnectedState
  implements ConnectionState {

  constructor(
    private connection: TCPConnection
  ) {}

  connect(): void {
    console.log("Already connected");
  }

  send(data: string): void {
    console.log("Sending:", data);
  }

  disconnect(): void {
    console.log("Closing connection...");

    this.connection.setState(
      new ClosedState(this.connection)
    );
  }
}

const connection = new TCPConnection();

connection.send("hello");

connection.connect();

connection.send("hello");

connection.disconnect();
