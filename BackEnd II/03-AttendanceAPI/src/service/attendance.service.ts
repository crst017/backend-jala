import { inject, injectable } from "inversify";
import { AttendanceServiceInterface } from "./attendance.service.interface";
import { Attendance } from "../entity/attendance";
import { DI } from "../inversify.types";
import { AttendanceRepositoryInterface } from "../repository/attendance.repository.interface";
import AttendanceInterface from "../entity/attendance.interface";
import { UserService } from "./user.service";
import { StatsService } from "./stats.service";

@injectable()
export class AttendanceService implements AttendanceServiceInterface {
    
    constructor( 
        @inject(DI.AttendanceRepositoryInterface) private attendanceRepository : AttendanceRepositoryInterface,
        @inject(DI.UserService) private userService: UserService,
        @inject(DI.StatsService) private statsService: StatsService
    ) {}
    
    async createAttendance(attendance: Attendance): Promise<AttendanceInterface> {
        
        const userId = attendance.userId;
        await this.userService.getUser( userId );
        const response = await this.attendanceRepository.createAttendance( attendance );
        this.statsService.sendMessage(JSON.stringify(response));
        return response
    }

    async deleteAttendance( id: string): Promise<boolean> {

        const attendance = await this.attendanceRepository.getAttendanceById(id);
        const userId = attendance.userId;
        const response = await this.attendanceRepository.deleteAttendance(id);
        this.statsService.sendMessage(JSON.stringify({ userId }));
        return response 
    }
    
    async getAttendances(): Promise<AttendanceInterface[]> {
        return await this.attendanceRepository.getAttendances();
    }

    async getAttendancesByUser( id: string ): Promise<AttendanceInterface[]> {
        return await this.attendanceRepository.getAttendancesByUser(id);
    }

    async getAttendanceById(id: string): Promise<AttendanceInterface> {

        return await this.attendanceRepository.getAttendanceById(id);
    }

    async deleteAttendancesByUser( id: string): Promise<number> {
        return await this.attendanceRepository.deleteAttendancesByUser(id);
    }
}