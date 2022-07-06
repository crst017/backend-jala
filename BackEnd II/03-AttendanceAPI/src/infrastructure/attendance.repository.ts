import { injectable } from "inversify";
import { Attendance } from "../entity/attendance";
import AttendanceModel from "../entity/attendance.entity";
import AttendanceInterface from "../entity/attendance.interface";
import { AttendanceRepositoryInterface } from "../repository/attendance.repository.interface";


@injectable()
export class AttendanceRepositoryMongo implements AttendanceRepositoryInterface {

    async createAttendance(attendance: Attendance): Promise<AttendanceInterface> {

        const createAttendance = new AttendanceModel({
            userId: attendance.userId,
            startTime: attendance.startTime,
            endTime: attendance.endTime,
            date: attendance.date,
            notes: attendance.notes
        });

        return await createAttendance.save();
    }   
}