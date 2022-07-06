import { Attendance } from "../entity/attendance";
import AttendanceInterface from "../entity/attendance.interface";

export interface AttendanceServiceInterface {

    createAttendance( attendance: Attendance ): Promise<AttendanceInterface>;

}