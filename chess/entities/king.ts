import Game from './game';
import Piece from './piece';
import Position from './position';
import { Color } from './types';


export default class King extends Piece {

    checkLock(position: Position): boolean {
        
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

        if ( lastPositionOccupied && lastPositionSameColor) {
            positionIsLocked = true;
        }

        return positionIsLocked
    }
    
    canMove(position: Position): boolean {
        
        const allowedToMove = this.ifMoveNotExposedToCheck(position);
        const movementIsLocked = this.checkLock(position);
        const movementRules = 
            this.moveForward( position, 1) ||
            this.moveSide( position, 1) ||
            this.moveDiagonal( position, 1)

        return (
            !movementIsLocked && 
            movementRules && 
            allowedToMove
        );
    }

    ifMoveNotExposedToCheck(position: Position): boolean {

        let allowedToMove = true;

        const color = this.getPieceColor();
        const game = Game.getGame();

        const oponentPieces = color == 'White' ? game.getBlackPieces() : game.getWhitePieces();
        
        oponentPieces.forEach( piece => {
            if(!( piece instanceof King)) {
                if ( piece.canMove(position) ) allowedToMove = false; // Check for all pieces but King
            }
        })

        return allowedToMove
    }
}