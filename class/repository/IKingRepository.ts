import King from "../entities/king";
import { BaseRepository } from "./BaseRepository";

export interface IKingRepository extends BaseRepository<King> {

    // find(item: King): Promise<King[]> 

    // findOne(id: string): Promise<King> 

    // create(item: King): Promise<King> 

    // update(id: string, item: King): Promise<boolean> 

    // delete(id: string): Promise<boolean> 
}