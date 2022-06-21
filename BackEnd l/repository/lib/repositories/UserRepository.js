"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const BaseRepository_1 = require("./base/BaseRepository");
require("reflect-metadata");
// @injectable()
// now, we have all code implementation from BaseRepository
class UserRepository extends BaseRepository_1.BaseRepository {
    // here, we can create all especific stuffs of User Repository
    countOfUsers() {
        return this._collection.count({});
    }
}
exports.UserRepository = UserRepository;
