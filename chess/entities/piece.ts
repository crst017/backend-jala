import Position from './position';
import { File, Rank, Color } from './types';
export default abstract class Piece {

    protected position: Position;
    isCaptured = false;

    constructor(
        private readonly color: Color,
        file: File,
        rank: Rank
    ) {
        this.position = new Position(file, rank);
    }

    getPosition() {
        return `( ${String.fromCharCode(this.position.getFile())} - ${this.position.getRank()} )`
    }

    getPieceRank() {
        return this.position.getRank()
    }

    getPieceFile() {
        return String.fromCharCode(this.position.getFile())
    }

    getPieceColor() {
        return this.color
    }
    
    capturedPiece() {
        !this.isCaptured 
    }

    moveForward( position: Position, module : number = 8) {
        const current = this.position;
        const final = position as Position;

        let rank = true;
        if(module) {
            const value = Math.abs(final.getRank() - current.getRank());
            if ( value <= module && value > 0 ) {
                rank = true
            } else {
                rank = false; 
            }
        }
        return current.getFile() == final.getFile() && rank;
    }

    moveSide( position: Position, module : number = 8 ) {
        const current = this.position;
        const final = position;
        let file = true;

        if(module) {
            const value = Math.abs(final.getFile() - current.getFile());
            if ( value <= module && value > 0 ) {
                file = true
            } else {
                file = false; 
            }
        }

        return this.position.getRank() == position.getRank() && file;
    }

    moveDiagonal( position: Position, module : number = 8) {
        const current = this.position;
        const final = position;
        let diagonal = false

        if(module) {
            const valueX = Math.abs(final.getRank() - current.getRank());
            const valueY = Math.abs(final.getFile() - current.getFile());

            if ((valueX <= module && valueX > 0) &&  
                (valueY <= module && valueY > 0) &&
                (valueX == valueY)) diagonal = true;
        }

        return diagonal
    }

    moveTo(position: Position) {

        let moved = false;
        if (this.canMove( position )) {
            this.position = position;
            moved = true
            return moved
        }
        return moved
    }

    abstract canMove(position: Position): boolean;
}