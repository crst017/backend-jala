import Piece from './piece';
import Position from './position';


export default class Knight extends Piece {

    canMove(position: Position): boolean {
        return (
            (this.moveForward( position, 2) && this.moveSide(position, 1)) ||
            (this.moveForward( position, 1) && this.moveSide(position, 2))
        );
    }
}