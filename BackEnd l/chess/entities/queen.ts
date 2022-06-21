import Game from './game';
import Piece from './piece';
import Position from './position';
import { Color } from './types';


export default class Queen extends Piece {

    checkLock(position: Position): boolean {
        
        let pathPositions : Position[] = [];
        
        if( this.checkVerticalMovement(position)) {
            console.log('voy vertical')
            pathPositions = this.calculateVerticalPath(position)
        }

        if( this.checkHorizontalMovement(position)) {
            console.log('voy horizontal')
            pathPositions = this.calculateHorizontalPath(position)
        }

        if( this.checkDiagonalMovement(position)) {
            pathPositions = this.calculateDiagonalPath(position)
            console.log('voy diagonal');
        }
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

