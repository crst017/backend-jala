import { Attendance } from "../entity/attendance";
import AttendanceInterface from "../entity/attendance.interface";

export interface AttendanceServiceInterface {

    createAttendance( attendance: Attendance ): Promise<AttendanceInterface>;
    getAttendances(): Promise<AttendanceInterface[]>;
    getAttendanceById( id: string ) : Promise<AttendanceInterface>;
    getAttendancesByUser( id: string ): Promise<AttendanceInterface[]>
    deleteAttendance( id: string ): Promise<boolean>;
    deleteAttendancesByUser( id: string): Promise<number>;
}