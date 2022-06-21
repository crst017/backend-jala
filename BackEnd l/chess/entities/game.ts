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
    status: Status = 'Ready to start';
    gameTurn: boolean;
    private pieces: Piece[] = [];
    private step: number;
    

    constructor( ...predefinedPieces : Piece[]) {

        predefinedPieces.length > 0 ? 
            this.createPredefinedPieces( predefinedPieces ) : 
            this.createDefaultPieces();

        this.gameTurn = true;
        this.step = 0;
    }

    private createDefaultPieces() {
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

    private createPredefinedPieces( predefinedPieces: Piece[]) {
        predefinedPieces.forEach( piece => this.pieces.push(piece))
    }

    public static getGame( ...predefinedPieces : Piece[]): Game {
        if (!Game.instance) {
            Game.instance = new Game( ...predefinedPieces );
        }
        return Game.instance;
    }

    increaseStep() {
        this.step += 1;
    }

    getStep() {
        return this.step;
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
        this.createDefaultPieces();
        this.gameTurn = true;
        this.status = 'Ready to start';
        this.step = 0
    }

    getGameTurn(): string {
        return this.gameTurn ? 'White' : 'Black'
    }
    
    getPieces() {
        return this.pieces
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

        const gameInstance = Game.getGame()
        const pieceToMove = gameInstance.showGame().find( piece => {
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
}