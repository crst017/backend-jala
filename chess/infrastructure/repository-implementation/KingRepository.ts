import { injectable } from "inversify";
import King from "../../entities/king";
import { BaseRepository } from "../../repository/BaseRepository";

@injectable()
export class KingRepository extends BaseRepository<King> {
 
}