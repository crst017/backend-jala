import Piece from './piece';
import Position from './position';

export default class Rook extends Piece {


    checkLock(position: Position): boolean {

        const pathPositions = this.checkHorizontalMovement(position) ? 
            this.calculateHorizontalPath(position) :
            this.calculateVerticalPath(position)

        let positionIsLocked = false;

        pathPositions.forEach( position => {
            
            if ( position.positionIsOccupied()) {
                positionIsLocked = true;
            } 
        });

        return positionIsLocked
    }

    canMove(position: Position): boolean {
        const movementIsLocked = this.checkLock(position);
        const movementRules = this.moveForward(position) || this.moveSide(position); 
        return ( 
            !movementIsLocked && 
            movementRules
        );
    }
}