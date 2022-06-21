import { Schema } from "mongoose";
import Piece from "../../entities/piece";
import IGame from "./IGame";

const gameSchema = new Schema<IGame>({

    status: { type: String, required: true },
    gameTurn: { type: Boolean, required: true },
    step: { type: Number, required: true }
});

export default gameSchema;