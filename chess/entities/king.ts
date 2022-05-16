import Game from './game';
import Piece from './piece';
import Position from './position';


export default class King extends Piece {

    // gridMovement = 1;
    
    canMove(position: Position): boolean {

        let allowedToMove = true;

        const color = this.getPieceColor();
        const game = Game.getGame();

        const oponentPieces = color == 'White' ? game.getBlackPieces() : game.getWhitePieces() 

        oponentPieces.forEach( piece => {
            if(!( piece instanceof King)) {
                if ( piece.canMove(position) ) allowedToMove = false; // Check for all pieces but King
            }
        })

        return (
            (this.moveForward( position, 1) ||
            this.moveSide( position, 1) ||
            this.moveDiagonal( position, 1)) &&
            allowedToMove
        );
    }
}