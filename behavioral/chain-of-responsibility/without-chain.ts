class RequestHandler {
  handle(request: string) {
    // Authentication
    console.log("Authenticating request");

    // Rate limiting
    console.log("Checking rate limits");

    // Validation
    console.log("Validating request");

    // Logging
    console.log("Logging request");

    // Business logic
    console.log(
      `Processing request: ${request}`
    );
  }
}

const handler = new RequestHandler();

handler.handle("/users");
