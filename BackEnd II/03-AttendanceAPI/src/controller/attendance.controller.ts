import { Request, Response, Router } from "express";
import { inject, injectable } from "inversify";
import { controller, httpDelete, httpGet, httpPost, queryParam, request, response } from "inversify-express-utils";
import { AttendanceServiceInterface } from "../service/attendance.service.interface";
import { DI } from "../inversify.types";

@controller('/attendances')
export class AttendanceController {

    constructor(@inject(DI.AttendanceServiceInterface) private attendanceService: AttendanceServiceInterface) {}

    @httpPost('/')
    async createAttendance(@request() req: Request, @response() res: Response) {

        const attendance = req.body;
        console.log(attendance);
        try {
            const createAttendance = await this.attendanceService.createAttendance(attendance);
            res.status(201).json(createAttendance)
            ;
        } catch( error ) {
            if ( error instanceof Error) {
                res.status(400).json({message: error.message});
            }
        }   
        
    }
}