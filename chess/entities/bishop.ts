import Game from './game';
import Piece from './piece';
import Position from './position';


export default class Bishop extends Piece {

    checkLock(position: Position): boolean {
        
        const pathPositions = this.calculateDiagonalPath(position);
        const gameInstance = Game.getGame();
        let positionIsLocked = false;

        pathPositions.forEach( position => {
            
            if ( position.positionIsOccupied()) {
                positionIsLocked = true;
            } 
        });

        return positionIsLocked
    }

    canMove(position: Position): boolean {

        const movementIsLocked = this.checkLock( position )
        return (
            !movementIsLocked &&
            this.moveDiagonal( position )
        );
    }
}