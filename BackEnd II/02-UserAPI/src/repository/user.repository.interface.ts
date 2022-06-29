import { DeleteResult } from "typeorm";
import { User } from "../entity/user.entity";

export interface UserRepositoryInterface {
    
    getUsers(): Promise<User[]>;
    // getUserById( id: number ) : Promise<User>;
    createUser( user: User ) : Promise<User>;
    deleteUser( id: string ) : Promise<DeleteResult>;

}

