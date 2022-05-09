"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
const UserRepository_1 = require("./repositories/UserRepository");
const container = new inversify_1.Container();
exports.container = container;
// container.bind<UserRepository>("UserRepository").to(UserRepository)
container.bind(UserRepository_1.UserRepository).toSelf();
