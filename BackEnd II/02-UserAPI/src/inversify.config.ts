import { Container } from "inversify";
import { UserRepositoryInterface } from "./repository/user.repository.interface";
import { UserRepositoryMySQL } from "./infrastructure/user.repository";

import { UserServiceInterface } from './service/user.service.interface';
import { UserService } from './service/user.service';

import { DI } from "./inversify.types";
import { AttendanceService } from "./service/attendance.service";

export const container = new Container();

container.bind<UserRepositoryInterface>(DI.UserRepositoryInterface).to(UserRepositoryMySQL);
container.bind<UserServiceInterface>(DI.UserServiceInterface).to(UserService);
container.bind<AttendanceService>(DI.AttendanceService).to(AttendanceService);

