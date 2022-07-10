import { Request, Response, Router } from "express";
import { UserServiceInterface } from '../service/user.service.interface';
import { DI } from '../inversify.types';
import { inject } from "inversify";
import { controller, httpPost, httpDelete, request, response, requestParam, httpGet, httpPut } from "inversify-express-utils";

@controller('/users')
export class UserController {

    constructor(@inject(DI.UserServiceInterface) private userService: UserServiceInterface) {
    }

    @httpPost('/')
    private async createUser(@request() req: Request, @response() res: Response) {

        try {
            const user = req.body;
            const response = await this.userService.createUser(user);
            res.status(201).json(response);

        } catch (error) {
            if ( error instanceof Error) {
                res.status(400).json({message: error.message});
            }
        }
    }

    @httpGet('/')
    private async getUsers(@request() req: Request, @response() res: Response) {

        const { nickname, fullname } = req.query;
        try {
            const users = await this.userService.getUsers( { nickname, fullname } );
            res.status(200).json(users);

        } catch (error) {
            if ( error instanceof Error) {
                res.status(500).json({message: error.message});
            }
        }
    }

    @httpGet('/:id')
    private async getUserById(@requestParam('id') id: string, @response() res: Response) {

        try {
            
            const user = await this.userService.getUserById(id);
            return res.status(200).json(user);

        } catch (error) {
            if ( error instanceof Error) {
                res.status(404).json({message: error.message});
            }
        }

    }

    @httpPut('/:id')
    private async updateUser(@request() req: Request, @response() res: Response) {
        try {
            const  userId  = req.params.id;
            const { totalAssistance } = req.body;
            const response = await this.userService.updateUser( userId, totalAssistance);
            res.status(200).json(response);

        } catch (error) {
            if ( error instanceof Error) {
                res.status(400).json({message: error.message});
            }
        }
    }

    @httpDelete('/:id')
    private async deleteUser(@requestParam('id') id: string, @response() res: Response) {
        
        try {
            const result = await this.userService.deleteUser(id);
            
            if( result.affected === 0 ) {
                res.status(404).json({message: 'User not found'});
            } else {
                res.status(200).json({message: 'User successfully deleted'});
            }

        } catch (error) {
            if ( error instanceof Error) {
                res.status(400).json({message: error.message});
            }
        }
    };

}

