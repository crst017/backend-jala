import Piece from './piece';
import Position from './position';


export default class Queen extends Piece {

    canMove(position: Position): boolean {

        return (
            this.moveForward( position ) ||
            this.moveSide( position ) ||
            this.moveDiagonal( position ) 
        );
    }
}

