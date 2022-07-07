import { inject, injectable } from "inversify";
import fetch from 'node-fetch';
import axios from 'axios';
import { User } from "../types";


const API_URL = 'http://localhost:3000/users';

@injectable()
export class UserService {
    
    apiUrl: string;

    constructor( ) {
        this.apiUrl = API_URL;
    }
    
    async getUser( id: string): Promise<boolean> {

        try {
            await axios.get(`${this.apiUrl}/${id}`);
            return true
        } catch ( error : any) {
            const message = error.response.data.message;
            throw new Error(message);
        }      
    }
}