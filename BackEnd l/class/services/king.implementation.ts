import { inject, injectable } from "inversify";
import King from "../entities/king";
import { KingRepository } from "../infrastructure/repository-implementation/KingRepository";
import { IKingRepository } from "../repository/IKingRepository";
import KingService from "./king.service";
import ServiceImplementation from "./service.implementation";
import { TYPES } from "./types";

@injectable()
export default class KingServiceImpl extends ServiceImplementation<King,KingRepository> implements KingService{
    
    private _repository: IKingRepository;

    constructor( @inject(TYPES.KingRepository) repository: KingRepository ) {
        super()
        this._repository = repository;
    }
    
    // Here must be implemented specific operations for King ...
}