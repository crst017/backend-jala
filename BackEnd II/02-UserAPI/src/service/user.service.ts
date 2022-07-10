import { inject, injectable } from "inversify";
import { User } from "../entity/user.entity";
import { UserServiceInterface } from "./user.service.interface";
import { UserRepositoryInterface } from "../repository/user.repository.interface";
import { DI } from "../inversify.types";
import { DeleteResult, SimpleConsoleLogger } from "typeorm";
import { AttendanceService } from "./attendance.service";
import { Assistance } from "../entity/assistance";
import { UserResponse } from "../entity/user.response";

@injectable()
export class UserService implements UserServiceInterface{

    constructor( 
        @inject(DI.UserRepositoryInterface) private userRepository: UserRepositoryInterface, 
        @inject(DI.AttendanceService) private attendanceService: AttendanceService 
    ) {}

    async getUserById(id: string): Promise<UserResponse> {

        const user = await this.userRepository.getUserById(id);
        const attendanceList : any = await this.attendanceService.attendanceList(id);
        const userResponse : any = user;
        userResponse.attendanceList = attendanceList.data;
        return userResponse
    }
    
    createUser(user: User): Promise<User> {
        return this.userRepository.createUser(user);
    }

    getUsers( filterParams ?: Object ): Promise<User[]> {
        return this.userRepository.getUsers( filterParams );
    }

    async deleteUser(id: string): Promise<DeleteResult> {
        await this.attendanceService.deleteAssistanceOfUser(id);
        return this.userRepository.deleteUser(id);
    }

    async updateUser(id: string, totalAssistance: number): Promise<unknown> {
        return this.userRepository.updateUser(id, totalAssistance);
    }
}