// for standard export at bottom
import { NotificationService } from './src/app/notification.service';

// for manual imports
export * from './src/app/notification.service';

// provides standard for consumption via things like angular-cli
export default {
  directives: [NotificationService]
}
