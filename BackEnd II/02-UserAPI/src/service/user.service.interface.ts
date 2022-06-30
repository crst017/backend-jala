import { DeleteResult } from "typeorm";
import { User } from "../entity/user.entity";

export interface UserServiceInterface {

    createUser(user: User): Promise<User>;
    getUsers( filterParams ?: Object ): Promise<User[]>;
    getUserById( id: string ) : Promise<User>;
    deleteUser(id: string): Promise<DeleteResult>

}