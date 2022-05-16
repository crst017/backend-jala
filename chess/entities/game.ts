import King from "./king";
import Queen from "./queen";
import Rook from "./rook";
import Knight from "./knight";
import Bishop from "./bishop";
import Pawn from "./pawn";
import Piece from "./piece";
import Position from "./position";
import { Color, Status } from "./types";

export default class Game {

    private static instance: Game;
    private pieces: Piece[] = [];
    
    gameTurn: boolean;
    status: Status = 'Ready to start';

    constructor() {
        this.createPieces()
        this.gameTurn = true;
    }

    private createPieces() {
        this.pieces.push(new Rook('White','A',1))
        this.pieces.push(new Rook('White','H',1))        
        this.pieces.push(new Knight('White','B',1))
        this.pieces.push(new Knight('White','G',1))
        this.pieces.push(new Bishop('White','C',1))
        this.pieces.push(new Bishop('White','F',1))
        this.pieces.push(new Queen('White','D',1))
        this.pieces.push(new King('White','E',1))
        this.pieces.push(new Pawn('White','A',2))
        this.pieces.push(new Pawn('White','B',2))
        this.pieces.push(new Pawn('White','C',2))
        this.pieces.push(new Pawn('White','D',2))
        this.pieces.push(new Pawn('White','E',2))
        this.pieces.push(new Pawn('White','F',2))
        this.pieces.push(new Pawn('White','G',2))
        this.pieces.push(new Pawn('White','H',2))
        
        this.pieces.push(new Rook('Black','A',8))
        this.pieces.push(new Rook('Black','H',8))
        this.pieces.push(new Knight('Black','B',8))
        this.pieces.push(new Knight('Black','G',8))
        this.pieces.push(new Bishop('Black','C',8))
        this.pieces.push(new Bishop('Black','F',8))
        this.pieces.push(new Queen('Black','D',8))
        this.pieces.push(new King('Black','E',8))
        this.pieces.push(new Pawn('Black','A',7))
        this.pieces.push(new Pawn('Black','B',7))
        this.pieces.push(new Pawn('Black','C',7))
        this.pieces.push(new Pawn('Black','D',7))
        this.pieces.push(new Pawn('Black','E',7))
        this.pieces.push(new Pawn('Black','F',7))
        this.pieces.push(new Pawn('Black','G',7))
        this.pieces.push(new Pawn('Black','H',7))
    }

    public static getGame(): Game {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }

    showGame(): Piece[] {
        return this.pieces;
    }

    showGameStatus() {
        return this.status;
    }

    setGameStatus( status: Status) {
        this.status = status;
    }

    resetGame(): void {
        this.pieces = [];
        this.createPieces();
        this.gameTurn = true;
        this.status = 'Ready to start';
    }

    getGameTurn(): string {
        return this.gameTurn ? 'White' : 'Black'
    }

    getBlackPieces(): Piece[] {
        return this.pieces.filter( piece => piece.getPieceColor() == 'Black')
    }

    getWhitePieces(): Piece[] {
        return this.pieces.filter( piece => piece.getPieceColor() == 'White')
    }

    findPiece( position: any ) {
        
        let { currentPosition } = position
        currentPosition = currentPosition as Position
        const pieceToMove = this.showGame().find( piece => {
            return (
                piece.getPieceFile() == currentPosition.file &&
                piece.getPieceRank() == currentPosition.rank
            )
        })
        return pieceToMove
    }

    changeTurn(): string {
        this.gameTurn = !this.gameTurn
        return `${this.gameTurn} plays`
    }

    findKingPosition( color: Color) {

        const king = this.showGame().find( piece => {
            return (
                piece instanceof King && 
                piece.getPieceColor() == color );
        }) 
        return king?.getPosition() || false
    }

    // verifyCheck( piece: Piece, position: Position) : boolean {
    //     const color = piece.getPieceColor();
    //     const game = Game.getGame();
    //     const kingPosition = this.findKingPosition( color );

    //     let allowedToMove = true;
    //     const oponentPieces = color == 'White' ? game.getBlackPieces() : game.getWhitePieces();
    //     oponentPieces.forEach( piece => {
    //         if(!( piece instanceof King)) {
    //             if ( piece.canMove(position) ) allowedToMove = false; // Check for all pieces but King
    //         }
    //     })

    //     return true
    // }
}