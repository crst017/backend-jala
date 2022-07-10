import { injectable } from "inversify";
import { UserRepositoryInterface } from "../repository/user.repository.interface";
import { User } from "../entity/user.entity";
import { AppDataSource } from "./data.source";
import { DeleteResult, FindManyOptions, FindOperator, Like, Repository } from "typeorm";
import { query } from "express";

@injectable()
export class UserRepositoryMySQL implements UserRepositoryInterface {
    
    private readonly userRepository: Repository<User>

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }
    
    
    async createUser(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }
    
    async getUsers( filterParams ?: any): Promise<User[]> {
        
        const { nickname, fullname } = filterParams;
        
        let query : FindManyOptions = {}
        query.where = []

        if( nickname ) {
            query.where.push( { nickname : Like (`%${nickname}%`) } );
        }
        if ( fullname ) {
            query.where.push( { fullname : Like (`%${fullname}%`)} );
        }
        
        query = query.where.length !== 0 ? query : {};
        return await this.userRepository.find( query );
    }


    async deleteUser(id: string): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }

    async getUserById(id: string): Promise<User>{
        
        const user = await this.userRepository.findOneBy( {id: id});

        if(!user) throw new Error("User not found");
        return user
    }

    async updateUser(id: string, totalAssistance: number): Promise<unknown> {
        const user = await this.getUserById(id);
        user.totalAssistance = totalAssistance
        const modifiedUser = await this.userRepository.save(user);
        return modifiedUser
    }
  
}

type QueryFilter = {
    
    nickname ?: FindOperator<string>,
    fullname ?: FindOperator<string>
}