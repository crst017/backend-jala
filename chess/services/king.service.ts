import King from "../entities/king";
import Service from "./service";

export default interface KingService extends Service<King>{

    create(item: King): string 
}