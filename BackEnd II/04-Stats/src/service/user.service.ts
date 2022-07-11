import axios from "axios";
import { AttendanceService } from "./attendance.service";

export class UserService {

    apiUrl : string;
    attendanceService: AttendanceService;

    constructor() {
        this.apiUrl = 'http://localhost:3000/users/';
        this.attendanceService = new AttendanceService();
    }

    async updateUserAttendance( userId: string) {

        try {
            const response = await this.attendanceService.getAttendanceByUser(userId);
            const totalAssistance = response.data.length;
            const bodyToSend = { totalAssistance }
            const update = await axios.put(this.apiUrl + userId, { totalAssistance: totalAssistance});
            return update
        } catch (error) {
            console.log("Error")
        }
    }
}