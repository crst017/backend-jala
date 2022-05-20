import Game from './game';
import Piece from './piece';
import Position from './position';
import { Color } from './types';


export default class Knight extends Piece {

    checkLock( position : Position): boolean {
        const lastPositionOccupied = position.positionIsOccupied();
        const gameInstance = Game.getGame();
        let positionIsLocked = false;
        
        let lastPositionPiece !: Piece | undefined;
        let lastPositionPieceColor !: Color | undefined;

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

        const movementIsLocked = this.checkLock( position )
        const movementRules = 
            (this.moveForward( position, 2) && this.moveSide(position, 1)) ||
            (this.moveForward( position, 1) && this.moveSide(position, 2))

        return (
            !movementIsLocked && 
            movementRules
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