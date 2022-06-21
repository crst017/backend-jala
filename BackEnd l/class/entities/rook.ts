import Piece from './piece';
import Position from './position';


export default class Rook extends Piece {

    canMove(position: Position): boolean {

        return ( 
            this.moveForward( position ) ||
            this.moveSide( position )
        );
    }
}