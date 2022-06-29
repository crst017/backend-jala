import { Request, Response, Router } from "express";
import { UserServiceInterface } from '../service/user.service.interface';
import { DI } from '../inversify.types';
import { inject } from "inversify";
import { controller, httpPost, httpDelete, request, response, requestParam, httpGet } from "inversify-express-utils";

@controller('/users')
export class UserController {

    constructor(@inject(DI.UserServiceInterface) private userService: UserServiceInterface) {
    }

    @httpPost('/')
    private async createUser(@request() req: Request, @response() res: Response) {

        try {
            const user = req.body;
            const response = await this.userService.createUser(user);
            res.status(201).json(user);

        } catch (error) {
            if ( error instanceof Error) {
                res.status(400).json({message: error.message});
            }
        }
    }

    @httpGet('/')
    private async getUsers(@request() req: Request, @response() res: Response) {

        try {
            const users = await this.userService.getUsers();
            res.status(200).json(users);

        } catch (error) {
            if ( error instanceof Error) {
                res.status(500).json({message: error.message});
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
                res.status(204).json(result);
            }

        } catch (error) {
            if ( error instanceof Error) {
                res.status(400).json({message: error.message});
            }
        }
    };

}
// import { equal } from "assert";
// import { Request, Response } from "express";
// import { User } from "../entity/user.entity";


// export const updateUser = async ( req: Request, res : Response) => {
//     try {
        
//         const { id } = req.params;
//         const { nickname, fullname } = req.body;

//         const user = await User.findOneBy({id: id});

//         if( !user ) return res.status(404).json({message: "User does not exists"});

//         await User.update({id: id}, {
//             nickname,
//             fullname
//         } )
        
//         res.sendStatus(204);

//     } catch (error) {
//         if ( error instanceof Error) {
//             res.status(500).json({message: error.message});
//         }
//     }   
// }

// export const deleteUser = async ( req: Request, res : Response) => {
//     try {
        
//         const { id } = req.params;
//         const result = await User.delete({ id: id});
        
//         if( result.affected === 0 ) {
//             return res.status(404).json({message: 'User not found'});
//         }
//         res.sendStatus(204);

//     } catch (error) {
//         if ( error instanceof Error) {
//             res.status(500).json({message: error.message});
//         }
//     }   
// }

// export const getUserById = async ( req: Request, res: Response ) => {
//     try {
        
//         const { id } = req.params;
//         const user = await User.findOneBy({id: id});
//         if( !user ) return res.status(404).json({message: "User does not exists"});

//         return res.status(200).json(user);

//     } catch (error) {
//         if ( error instanceof Error) {
//             res.status(500).json({message: error.message});
//         }
//     }
// }

