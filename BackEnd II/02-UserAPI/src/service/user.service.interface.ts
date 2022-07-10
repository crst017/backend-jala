import { DeleteResult } from "typeorm";
import { User } from "../entity/user.entity";
import { UserResponse } from "../entity/user.response";

export interface UserServiceInterface {

    createUser(user: User): Promise<User>;
    getUsers( filterParams ?: Object ): Promise<User[]>;
    getUserById( id: string ) : Promise<UserResponse>;
    deleteUser(id: string): Promise<DeleteResult>
    updateUser(id: string, totalAssistance: number): Promise<unknown>
}