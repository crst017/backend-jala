import Piece from './piece';
import Position from './position';


export default class King extends Piece {

    // gridMovement = 1;
    
    canMove(position: Position): boolean {

        return (
            this.moveForward( position, 1) ||
            this.moveSide( position, 1) ||
            this.moveDiagonal( position, 1)
        );
    }
}