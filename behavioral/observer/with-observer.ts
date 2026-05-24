interface EventListener {
  update(username: string): void;
}

class EmailService implements EventListener {
  update(username: string): void {
    console.log(
      `Sending welcome email to ${username}`
    );
  }
}

class AnalyticsService implements EventListener {
  update(username: string): void {
    console.log(
      `Updating analytics for ${username}`
    );
  }
}

class AuditLogService implements EventListener {
  update(username: string): void {
    console.log(
      `Publishing audit log for ${username}`
    );
  }
}

class RecommendationService implements EventListener {
  update(username: string): void {
    console.log(
      `Updating recommendations for ${username}`
    );
  }
}

class UserCreatedEvent {
  private listeners: EventListener[] = [];

  subscribe(listener: EventListener) {
    this.listeners.push(listener);
  }

  notify(username: string) {
    for (const listener of this.listeners) {
      listener.update(username);
    }
  }
}

export class UserService {
  constructor(
    private userCreatedEvent: UserCreatedEvent
  ) {}

  createUser(username: string) {
    console.log(`Creating user: ${username}`);

    console.log("Saving user to database");

    this.userCreatedEvent.notify(username);
  }
}

const event = new UserCreatedEvent();

event.subscribe(new EmailService());
event.subscribe(new AnalyticsService());
event.subscribe(new AuditLogService());
event.subscribe(new RecommendationService());

const userService = new UserService(event);

userService.createUser("deepanshu");
