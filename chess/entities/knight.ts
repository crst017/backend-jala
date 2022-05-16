import Piece from './piece';
import Position from './position';


export default class Knight extends Piece {

    canMove(position: Position): boolean {
        return (
            (this.moveForward( position, 2) && this.moveSide(position, 1)) ||
            (this.moveForward( position, 1) && this.moveSide(position, 2))
        );
    }

    moveForward(position: Position, module?: number): boolean {
        const current = this.position;
        const final = position as Position;

        let rank = true;
        if(module) {
            const value = Math.abs(final.getRank() - current.getRank());
            if ( ! (value == module && value > 0) ) 
                rank = false;     
        }
        return rank;
    }

    moveSide(position: Position, module?: number): boolean {
        const current = this.position;
        const final = position;
        let file = true;

        if(module) {
            const value = Math.abs(final.getFile() - current.getFile());
            if ( ! (value == module && value > 0) ) 
                file = false     
        }
        return file;
    }
}