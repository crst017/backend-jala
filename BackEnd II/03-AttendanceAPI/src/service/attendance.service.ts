import { inject, injectable } from "inversify";
import { AttendanceServiceInterface } from "./attendance.service.interface";
import { Attendance } from "../entity/attendance";
import { DI } from "../inversify.types";
import { AttendanceRepositoryInterface } from "../repository/attendance.repository.interface";
import AttendanceInterface from "../entity/attendance.interface";
import { UserService } from "./user.service";

@injectable()
export class AttendanceService implements AttendanceServiceInterface {
    
    constructor( 
        @inject(DI.AttendanceRepositoryInterface) private attendanceRepository : AttendanceRepositoryInterface,
        @inject(DI.UserService) private userService: UserService
    ) {}
    
    async createAttendance(attendance: Attendance): Promise<AttendanceInterface> {
        
        const userId = attendance.userId;
        await this.userService.getUser( userId );
        return await this.attendanceRepository.createAttendance( attendance );
    }

    async getAttendances(): Promise<AttendanceInterface[]> {
        return await this.attendanceRepository.getAttendances();
    }

    async getAttendancesByUser( id: string ): Promise<AttendanceInterface[]> {
        return await this.attendanceRepository.getAttendancesByUser(id);
    }

    async deleteAttendance( id: string): Promise<boolean> {
        return await this.attendanceRepository.deleteAttendance(id);
    }

    async deleteAttendancesByUser( id: string): Promise<number> {
        return await this.attendanceRepository.deleteAttendancesByUser(id);
    }
}