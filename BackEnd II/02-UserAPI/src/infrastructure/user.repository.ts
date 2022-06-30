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
        const query : FindManyOptions = {}
        

        query.where = {}

        if( nickname ) {
            query.where.nickname = Like (`%${nickname}%`)
        }
        if ( fullname ) {
            query.where.fullname = Like (`%${fullname}%`)
        }

        return await this.userRepository.find( query );
    }

    // find({
    // where: [
    //     { nickname: Like("%Timber%") },
    //     { fullname: Like("%Timber%") },
    // ] })

    async deleteUser(id: string): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }

    async getUserById(id: string): Promise<User>{
        
        const user = await this.userRepository.findOneBy( {id: id});

        if(!user) throw new Error("User not found");
        return user
    }
  
}

type QueryFilter = {
    
    nickname ?: FindOperator<string>,
    fullname ?: FindOperator<string>
}