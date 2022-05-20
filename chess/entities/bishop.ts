import Game from './game';
import Piece from './piece';
import Position from './position';
import { Color } from './types';


export default class Bishop extends Piece {

    checkLock(position: Position): boolean {
        
        const pathPositions = this.calculateDiagonalPath(position);
        const gameInstance = Game.getGame();
        let positionIsLocked = false;

        let lastPositionPiece !: Piece | undefined;
        let lastPositionPieceColor !: Color | undefined;

        const lastPositionOccupied = position.positionIsOccupied();
        const movingPieceColor = this.getPieceColor();
        const currentPosition = {
            currentPosition : position
        }
        
        if( lastPositionOccupied ) {
            lastPositionPiece = gameInstance.findPiece( currentPosition );
            lastPositionPieceColor = lastPositionPiece?.getPieceColor();
        }

        const lastPositionSameColor = lastPositionPieceColor == movingPieceColor;

        pathPositions.forEach( position => {
            
            if ( position.positionIsOccupied() ) {
                positionIsLocked = true;
            }
            
            if ( !position.positionIsOccupied() && lastPositionSameColor ) {
                positionIsLocked = true
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