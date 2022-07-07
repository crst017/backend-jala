import { Types } from "mongoose";

type AttendanceId = string | Types.ObjectId;

export default AttendanceId;

export type User = {
    id: string;
    nickname: string;
    fullName: string;
    totalAttendance: number;
    attendances: string;
};