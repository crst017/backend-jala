import 'reflect-metadata';
import { AppDataSource } from './data-source';

class Test {
    async initializeDb() {
        await AppDataSource.initialize();
    }
}

new Test.initialize(); 
