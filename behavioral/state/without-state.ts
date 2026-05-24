export class TCPConnection {
  private state = "CLOSED";

  connect() {
    if (this.state === "CLOSED") {
      console.log("Opening connection...");
      this.state = "CONNECTED";
      return;
    }

    console.log(
      "Cannot connect from current state"
    );
  }

  send(data: string) {
    if (this.state === "CONNECTED") {
      console.log("Sending:", data);
      return;
    }

    console.log(
      "Cannot send data while disconnected"
    );
  }

  disconnect() {
    if (this.state === "CONNECTED") {
      console.log("Closing connection...");
      this.state = "CLOSED";
      return;
    }

    console.log(
      "Cannot disconnect from current state"
    );
  }
}

const connection = new TCPConnection();

connection.send("hello");

connection.connect();

connection.send("hello");

connection.disconnect();
