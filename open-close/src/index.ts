import { User } from './user';
import { NotificationCenter } from './notification-center';

let user = new User();

let notificationCenter = new NotificationCenter();
notificationCenter.notifyByEmail(user, 'test');

