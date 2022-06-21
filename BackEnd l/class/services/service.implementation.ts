import { BaseRepository } from "../repository/BaseRepository";
import Service from "./service";

export default class ServiceImplementation<T, R extends BaseRepository<T>> implements Service<T> {
    
    repository !: R;

    create(item: T): string {
        return this.repository.create(item);
    }
    // findAll(): T[] 
}