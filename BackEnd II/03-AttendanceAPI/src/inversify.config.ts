import { Container } from "inversify";
import { AttendanceRepositoryInterface } from "./repository/attendance.repository.interface";
import { AttendanceRepositoryMongo } from "./infrastructure/attendance.repository";

import { AttendanceServiceInterface } from './service/attendance.service.interface';
import { AttendanceService } from './service/attendance.service';

import { DI } from "./inversify.types";
import { UserService } from "./service/user.service";
import { StatsService } from "./service/stats.service";

export const container = new Container();

container.bind<AttendanceRepositoryInterface>(DI.AttendanceRepositoryInterface).to(AttendanceRepositoryMongo);
container.bind<AttendanceServiceInterface>(DI.AttendanceServiceInterface).to(AttendanceService);
container.bind<UserService>(DI.UserService).to(UserService);
container.bind<StatsService>(DI.StatsService).to(StatsService).inSingletonScope();