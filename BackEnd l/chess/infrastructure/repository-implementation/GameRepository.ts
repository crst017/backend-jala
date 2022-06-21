import { injectable } from "inversify";
import Game from "../../entities/game";
import { BaseRepository } from "../../repository/BaseRepository";

@injectable()
export class KingRepository extends BaseRepository<Game> {
 
}