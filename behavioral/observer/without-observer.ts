export class UserService {
  createUser(username: string) {
    console.log(`Creating user: ${username}`);

    // Save user to database
    console.log("Saving user to database");

    // Send welcome email
    console.log("Sending welcome email");

    // Update analytics
    console.log("Updating analytics");

    // Notify recommendation service
    console.log("Notifying recommendation service");

    // Publish audit logs
    console.log("Publishing audit logs");
  }
}

const userService = new UserService();

userService.createUser("deepanshu");
