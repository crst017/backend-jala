import "reflect-metadata";
import { Server } from "./app";
import { AppDataSource } from "./infrastructure/data.source";

async function main () {
    
    try {
        
        await AppDataSource
        .initialize();
        const server = new Server();
        server.start();
        
    } catch (error) {
        console.log(error);
    }
}

main();