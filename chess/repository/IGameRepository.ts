import Game from "../entities/game";
import { BaseRepository } from "./BaseRepository";

export interface IGameRepository extends BaseRepository<Game> {

    // find(item: King): Promise<King[]> 

    // findOne(id: string): Promise<King> 

    // create(item: King): Promise<King> 

    // update(id: string, item: King): Promise<boolean> 

    // delete(id: string): Promise<boolean> 
}