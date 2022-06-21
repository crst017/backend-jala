import { BaseRepository } from "./base/BaseRepository";
import { User } from "../entities/User"
import { inject, injectable } from "inversify";
import 'reflect-metadata'; 

// @injectable()
// now, we have all code implementation from BaseRepository
export class UserRepository extends BaseRepository<User>{

    // here, we can create all especific stuffs of User Repository
    countOfUsers(): Promise<number> {
        return this._collection.count({})
    }
}