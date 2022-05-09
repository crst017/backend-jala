import { IRead } from "./interfaces/IRead";
import { IWrite } from "./interfaces/IWrite";

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {

    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }

    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }

    create(item: T): string {
        return 'Item created successfully!'
    }

    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}