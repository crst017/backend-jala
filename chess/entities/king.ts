import Game from './game';
import Piece from './piece';
import Position from './position';


export default class King extends Piece {

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