import { Container } from "inversify";
import { BaseRepository } from "./repositories/base/BaseRepository";
import { UserRepository } from "./repositories/UserRepository";

const container = new Container();

// container.bind<UserRepository>("UserRepository").to(UserRepository)
container.bind(UserRepository).toSelf()
export { container }