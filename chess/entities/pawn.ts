import Piece from './piece';
import Position from './position';

export default class Pawn extends Piece {

    canMove(position: Position): boolean {

        const rank = this.position.getRank();
        const color = this.getPieceColor();

        let inInitialPosition = false;

        if ( rank == 2 && color == 'White' ) inInitialPosition = true
        if ( rank == 7 && color == 'Black' ) inInitialPosition = true

        return (
            this.moveForward(position, 1) ||
            ( this.moveForward(position, 2) && inInitialPosition )
        );
    }

    moveForward( position: Position, module : number) {
        const current = this.position;
        const final = position as Position;
        const color = this.getPieceColor();

        let rank = false;
        if(module) {

            const value = final.getRank() - current.getRank();
            if ( value <= module && value > 0 && color == 'White') {
                rank = true 
            }
            if ( Math.abs(value) <= module && value < 0 && color == 'Black') {
                rank = true 
            } 
        }
        return current.getFile() == final.getFile() && rank;
    }
}