import { injectable } from "inversify";
import { UserRepositoryInterface } from "../repository/user.repository.interface";
import { User } from "../entity/user.entity";
import { AppDataSource } from "./data.source";
import { DeleteResult, Repository } from "typeorm";

@injectable()
export class UserRepositoryMySQL implements UserRepositoryInterface {
    
    private readonly userRepository: Repository<User>

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }
    
    async createUser(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }
    
    async getUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async deleteUser(id: string): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }
    // async getUsers(): Promise<User[]> {
        
    //     const users = await this.userRepository.find();
    //     return users
    // }

    // async getUserById(id: string): Promise<User | string> {
        
    //     const user = await this.userRepository.findOneBy( {id: id});
    //     if( !user ) return "";
    //     return user
    // }

    // async createUser(user: User): Promise<User> {
        
    //     await this.userRepository.save(user);
    //     return user
    // }
    
    // async deleteUser(id: string): Promise<boolean> {
        
    //     const result = await this.userRepository.delete(id);
    //     const response = result.affected !== 0
    //     return response
    // }
    
}
