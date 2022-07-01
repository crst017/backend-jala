import { injectable } from "inversify";
import { Repository } from "typeorm";
import { Attendance } from "../entity/attendance.entity";
import { AttendanceRepositoryInterface } from "../repository/attendance.repository.interface";
import { AppDataSource } from "./data.source";



@injectable()
export class AttendanceRepositoryMongo implements AttendanceRepositoryInterface {
    
    private readonly attendanceRepository: Repository<Attendance>

    constructor() {
        this.attendanceRepository = AppDataSource.getRepository(Attendance);
    }

    createAttendance(attendance: Attendance): Promise<Attendance> {
        throw new Error("Method not implemented.");
    }

    
}