import Piece from './piece';
import Position from './position';


export default class Pawn extends Piece {

    canMove(position: Position): boolean {

        return (
            this.moveForward(position, 1) 
        );
    }
}