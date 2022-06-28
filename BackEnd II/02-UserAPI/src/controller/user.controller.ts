import { equal } from "assert";
import { Request, Response } from "express";
import { User } from "../entity/User.entity";


export const getUsers = async ( req: Request, res : Response) => {
    try {
        
        const users = await User.find();
        return res.status(200).json(users);

    } catch (error) {
        if ( error instanceof Error) {
            res.status(500).json({message: error.message});
        }
    }   
}

export const createUser = async ( req: Request, res: Response) => {

    try {
        
        const { nickname, fullname } = req.body;
 
        const user = new User();
        user.nickname = nickname;
        user.fullname = fullname;
    
        await user.save();
    
        res.status(201).json(user);

    } catch (error) {
        if ( error instanceof Error) {
            res.status(500).json({message: error.message});
        }
    }
}

export const updateUser = async ( req: Request, res : Response) => {
    try {
        
        const { id } = req.params;
        const { nickname, fullname } = req.body;

        const user = await User.findOneBy({id: id});

        if( !user ) return res.status(404).json({message: "User does not exists"});

        await User.update({id: id}, {
            nickname,
            fullname
        } )
        
        res.sendStatus(204);

    } catch (error) {
        if ( error instanceof Error) {
            res.status(500).json({message: error.message});
        }
    }   
}

export const deleteUser = async ( req: Request, res : Response) => {
    try {
        
        const { id } = req.params;
        const result = await User.delete({ id: id});
        
        if( result.affected === 0 ) {
            return res.status(404).json({message: 'User not found'});
        }
        res.sendStatus(204);

    } catch (error) {
        if ( error instanceof Error) {
            res.status(500).json({message: error.message});
        }
    }   
}

export const getUserById = async ( req: Request, res: Response ) => {
    try {
        
        const { id } = req.params;
        const user = await User.findOneBy({id: id});
        if( !user ) return res.status(404).json({message: "User does not exists"});

        return res.status(200).json(user);

    } catch (error) {
        if ( error instanceof Error) {
            res.status(500).json({message: error.message});
        }
    }
}

