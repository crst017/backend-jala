import axios from 'axios';
import { injectable } from 'inversify';
import { Assistance } from '../entity/assistance';

const API_URL = 'http://localhost:3001/attendances';

@injectable()
export class AttendanceService {
    
    apiUrl: string;

    constructor( ) {
        this.apiUrl = API_URL;
    }
    
    async attendanceList( id: string): Promise<Assistance[]> {

        try {
            const attendanceList: Assistance[] = await axios.get(`${this.apiUrl}/${id}`);
            return attendanceList

        } catch ( error : any) {
            const message = error.response.data.message;
            throw new Error(message);
        }      
    }

    async deleteAssistanceOfUser( id: string) {
        
        try {
            await axios.delete(`${this.apiUrl}/users/${id}`);
        } catch ( error: any) {
            const message = error.response.data.message;
            throw new Error(message);
        }
    }
}