import Game from './game';
import Piece from './piece';
import Position from './position';
import { Color } from './types';

export default class Pawn extends Piece {

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
        const piecesSameFile = position.getFile() == this.getPosition().getFile();

        if ( lastPositionOccupied && piecesSameFile) {
            positionIsLocked = true;
        }

        if ( lastPositionOccupied && lastPositionSameColor) {
            positionIsLocked = true;
        }

        if ( !lastPositionOccupied && !piecesSameFile) {
            positionIsLocked = true;
        }

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
            (this.moveDiagonal(position, 1) ) ||
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