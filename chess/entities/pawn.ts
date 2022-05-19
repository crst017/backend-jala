import Piece from './piece';
import Position from './position';

export default class Pawn extends Piece {

    checkLock(position: Position): boolean {

        let pathPositions : Position[] = [];
        
        if( this.checkVerticalMovement(position)) {
            pathPositions = this.calculateVerticalPath(position)
        }

        if( this.checkHorizontalMovement(position)) {
            pathPositions = this.calculateHorizontalPath(position)
        }

        if( this.checkDiagonalMovement(position)) {
            pathPositions = this.calculateDiagonalPath(position)
        }

        let positionIsLocked = false;

        pathPositions.forEach( position => {
            
            if ( position.positionIsOccupied()) {
                positionIsLocked = true;
            } 
        });

        return positionIsLocked
    }

    canMove(position: Position): boolean {

        const rank = this.position.getRank();
        const color = this.getPieceColor();

        let inInitialPosition = false;

        if ( rank == 2 && color == 'White' ) inInitialPosition = true
        if ( rank == 7 && color == 'Black' ) inInitialPosition = true

        const movementIsLocked = this.checkLock(position);
        const movementRules = 
            this.moveForward(position, 1) ||
            ( this.moveForward(position, 2) && inInitialPosition );

        return (
            !movementIsLocked && 
            movementRules
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