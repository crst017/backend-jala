import axios from "axios";

export class AttendanceService {

    apiUrl : string;

    constructor() {
        this.apiUrl = 'http://localhost:3001/attendances/users/';
    }

    async getAttendanceByUser( userId: string) {
        const response = await axios.get( this.apiUrl + userId );
        return response
    }
}
