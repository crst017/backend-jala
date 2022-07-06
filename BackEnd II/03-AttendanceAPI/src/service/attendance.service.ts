import { inject, injectable } from "inversify";
import { AttendanceServiceInterface } from "./attendance.service.interface";
import { Attendance } from "../entity/attendance";
import { DI } from "../inversify.types";
import { AttendanceRepositoryInterface } from "../repository/attendance.repository.interface";
import AttendanceInterface from "../entity/attendance.interface";

@injectable()
export class AttendanceService implements AttendanceServiceInterface {
    
    constructor( @inject(DI.AttendanceRepositoryInterface) private attendanceRepository : AttendanceRepositoryInterface) {
        
    }
    
    async createAttendance(attendance: Attendance): Promise<AttendanceInterface> {
    
        return await this.attendanceRepository.createAttendance( attendance );
    }

}