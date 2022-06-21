"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpartanRepository = void 0;
const BaseRepository_1 = require("./base/BaseRepository");
// now, we have all code implementation from BaseRepository
class SpartanRepository extends BaseRepository_1.BaseRepository {
    // here, we can create all especific stuffs of Spartan Repository
    countOfSpartans() {
        return this._collection.count({});
    }
}
exports.SpartanRepository = SpartanRepository;
