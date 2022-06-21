import { INotification } from "./INotification";
import { User } from "./user";

export default class notifyByFacebook implements INotification{
    notify(user: User, message: string): void {
        throw new Error("Method not implemented.");
    }  
}