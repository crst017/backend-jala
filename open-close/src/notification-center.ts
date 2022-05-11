import notifyByFacebook from './facebookNotification';
import { User } from './user';
export class NotificationCenter extends notifyByFacebook{

    notifyByEmail(user: User, message: string) {

    }

    notifyBySms(user: User, message: string) {

    }

    //PROHIBIDO
    // notifyByFacebook(user: User, message: string) {

    // }
}