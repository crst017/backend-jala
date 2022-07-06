import 'reflect-metadata';
import cors from 'cors';
import morgan from 'morgan';
import express, { Application } from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "./inversify.config";
import './controller/attendance.controller';

export class Server {

    private port: number = 3000;
    private server: InversifyExpressServer;

    constructor() {
        this.server = new InversifyExpressServer(container);
        this.server.setConfig((app: Application) => {
            app.use(express.urlencoded({extended: true}));
            app.use(morgan('dev'));
            app.use(cors());
            app.use(express.json());
        });
    }

    start() : void {
        const api = this.server.build();
        api.listen(this.port, ()=> {
            console.log(`Server is listening on ${this.port} port.`);
        });
    }
}