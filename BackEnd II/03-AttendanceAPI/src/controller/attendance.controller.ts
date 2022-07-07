import { Request, Response, Router } from "express";
import { id, inject, injectable } from "inversify";
import { controller, httpDelete, httpGet, httpPost, queryParam, request, requestParam, response } from "inversify-express-utils";
import { AttendanceServiceInterface } from "../service/attendance.service.interface";
import { DI } from "../inversify.types";

@controller('/attendances')
export class AttendanceController {

    constructor(@inject(DI.AttendanceServiceInterface) private attendanceService: AttendanceServiceInterface) {}

    @httpPost('/')
    async createAttendance(@request() req: Request, @response() res: Response) {

        const attendance = req.body;
        
        try {

            const createAttendance = await this.attendanceService.createAttendance(attendance);
            res.status(201).json(createAttendance);
            
        } catch( error ) {
            if ( error instanceof Error) {
                res.status(404).json({message: error.message});
            }
        }   
        
    }

    @httpGet('/')
    async getAttendances(@request() req: Request, @response() res: Response) {
   
        try {

            const attendancesList = await this.attendanceService.getAttendances();
            res.status(200).json(attendancesList);
            
        } catch( error ) {
            if ( error instanceof Error) {
                res.status(500).json({message: error.message});
            }
        }   
    }

    @httpGet('/:id')
    async getAttendancesByUserId(@requestParam('id') id: string, @response() res: Response) {
   
        try {

            const attendancesList = await this.attendanceService.getAttendancesByUser(id);
            res.status(200).json(attendancesList);
            
        } catch( error ) {
            if ( error instanceof Error) {
                res.status(404).json({message: error.message});
            }
        }   
        
    }

    @httpDelete('/:id')
    async deleteAttendance(@requestParam('id') id: string, @response() res: Response) {
   
        try {
            const result = await this.attendanceService.deleteAttendance(id);
            if ( result ) res.status(200).json({message: 'Attendance successfully deleted'});
            
        } catch( error ) {
            if ( error instanceof Error) {
                res.status(404).json({message: error.message});
            }
        }   
        
    }

    @httpDelete('/users/:id')
    async deleteAllAttendancesByUserID(@requestParam('id') id: string, @response() res: Response) {
   
        try {
            const deleteCount = await this.attendanceService.deleteAttendancesByUser(id);
            if ( deleteCount ) res.status(200).json({message: deleteCount + ' attendance(s) were successfully deleted'});
            
        } catch( error ) {
            if ( error instanceof Error) {
                res.status(404).json({message: error.message});
            }
        }   
        
    }

}