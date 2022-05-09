import Piece from './piece';
import Position from './position';


export default class Bishop extends Piece {

    canMove(position: Position): boolean {

        return (
            this.moveDiagonal( position )
        );
    }
}