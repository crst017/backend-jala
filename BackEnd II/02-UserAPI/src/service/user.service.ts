import { inject, injectable } from "inversify";
import { User } from "../entity/user.entity";
import { UserServiceInterface } from "./user.service.interface";
import { UserRepositoryInterface } from "../repository/user.repository.interface";
import { DI } from "../inversify.types";
import { DeleteResult } from "typeorm";

@injectable()
export class UserService implements UserServiceInterface{

    constructor( @inject(DI.UserRepositoryInterface) private userRepository: UserRepositoryInterface ) {}
    
    createUser(user: User): Promise<User> {
        return this.userRepository.createUser(user);
    }

    getUsers(): Promise<User[]> {
        return this.userRepository.getUsers();
    }

    deleteUser(id: string): Promise<DeleteResult> {
        return this.userRepository.deleteUser(id);
    }
}