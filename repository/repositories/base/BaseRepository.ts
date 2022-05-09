import { IWrite } from '../interfaces/IWrite';
import { IRead } from '../interfaces/IRead';

// we imported all types from mongodb driver, to use in code
import { MongoClient, Db, Collection } from 'mongodb';
import { injectable } from 'inversify';
import 'reflect-metadata';

// that class only can be extended
@injectable()
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  //Creates a property to reuse in all instances
  public readonly _collection: Collection;

  //Constructor to manipulate mongoDB
  constructor(db: Db, collectionName: string) {
    this._collection = db.collection(collectionName);
  }

  // Logic to create an entity
  async create(item: T): Promise<boolean> {
    const result = await this._collection.insertOne(item);
    return !!result.insertedId;
  }

  
  update(id: string, item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  find(item: T): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
}