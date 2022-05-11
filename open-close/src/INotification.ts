import { User } from "./user";

export interface INotification {
    
    notify( user: User, message: string) : void;
}