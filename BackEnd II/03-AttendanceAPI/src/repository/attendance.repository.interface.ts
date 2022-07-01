import { DeleteResult } from "typeorm";
import { Attendance } from "../entity/attendance.entity";

export interface AttendanceRepositoryInterface {

    createAttendance( attendance: Attendance ): Promise<Attendance>;
}