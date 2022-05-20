import Piece from "../../entities/piece";
import { Schema, Types } from 'mongoose';

export default interface IGame {
    status: string;
    pieces: [Piece];
    gameTurn: boolean;
    step: number;
}