import { Attendance } from "../entity/attendance";
import AttendanceInterface from '../entity/attendance.interface';

export interface AttendanceRepositoryInterface {

    createAttendance( attendance: Attendance ): Promise<AttendanceInterface>

}