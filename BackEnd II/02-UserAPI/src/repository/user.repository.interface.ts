import { DeleteResult } from "typeorm";
import { User } from "../entity/user.entity";

export interface UserRepositoryInterface {
    
    getUsers( filterParams ?: Object): Promise<User[]>;
    getUserById( id: string ) : Promise<User>;
    createUser( user: User ) : Promise<User>;
    deleteUser( id: string ) : Promise<DeleteResult>;

}

