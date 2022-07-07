import { injectable } from "inversify";
import { Attendance } from "../entity/attendance";
import { AttendanceModel } from "../entity/attendance.entity";
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

    async getAttendances(): Promise<AttendanceInterface[]> {
        return await AttendanceModel.find(); 
    }

    async getAttendancesByUser( id: string ): Promise<AttendanceInterface[]> {
        return await AttendanceModel.find( {userId : id} )
    }

    async deleteAttendance(id: string): Promise<boolean> {
        
        const res = await AttendanceModel.deleteOne( {_id : id});
        if ( res.deletedCount === 1 ) return true
        throw new Error('Attendance not found')
    }

    async deleteAttendancesByUser(id: string): Promise<number> {
        
        const res = await AttendanceModel.deleteMany( {userId : id});
        if ( res.deletedCount > 0 ) return res.deletedCount
        throw new Error('User not found')
    }
}