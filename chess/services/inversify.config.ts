import { Container } from "inversify";
import { KingRepository } from "../infrastructure/repository-implementation/KingRepository";
// import { IKingRepository } from "../repository/IKingRepository";
import { TYPES } from "./types";

const container = new Container();

container.bind<KingRepository>(TYPES.KingRepository).to(KingRepository);

export { container }