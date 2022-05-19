import Piece from './piece';
import Position from './position';


export default class Queen extends Piece {

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

        const movementIsLocked = this.checkLock(position)
        const movementRules = 
            this.moveForward( position ) ||
            this.moveSide( position ) ||
            this.moveDiagonal( position )
        
        return (
            !movementIsLocked && 
            movementRules
        );
    }
}

