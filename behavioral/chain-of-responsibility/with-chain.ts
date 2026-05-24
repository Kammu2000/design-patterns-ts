interface Middleware {
  setNext(
    middleware: Middleware
  ): Middleware;

  handle(request: string): void;
}

abstract class BaseMiddleware
  implements Middleware {

  private nextMiddleware?: Middleware;

  setNext(
    middleware: Middleware
  ): Middleware {
    this.nextMiddleware = middleware;

    return middleware;
  }

  handle(request: string): void {
    if (this.nextMiddleware) {
      this.nextMiddleware.handle(request);
    }
  }
}

class AuthenticationMiddleware
  extends BaseMiddleware {

  handle(request: string): void {
    console.log("Authenticating request");

    super.handle(request);
  }
}

class RateLimitMiddleware
  extends BaseMiddleware {

  handle(request: string): void {
    console.log("Checking rate limits");

    super.handle(request);
  }
}

class ValidationMiddleware
  extends BaseMiddleware {

  handle(request: string): void {
    console.log("Validating request");

    super.handle(request);
  }
}

class LoggingMiddleware
  extends BaseMiddleware {

  handle(request: string): void {
    console.log("Logging request");

    super.handle(request);
  }
}

class BusinessLogicMiddleware
  extends BaseMiddleware {

  handle(request: string): void {
    console.log(
      `Processing request: ${request}`
    );

    super.handle(request);
  }
}

const auth =
  new AuthenticationMiddleware();

const rateLimit =
  new RateLimitMiddleware();

const validation =
  new ValidationMiddleware();

const logging =
  new LoggingMiddleware();

const business =
  new BusinessLogicMiddleware();

auth
  .setNext(rateLimit)
  .setNext(validation)
  .setNext(logging)
  .setNext(business);

auth.handle("/users");
