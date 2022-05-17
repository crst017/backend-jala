import King from "./king";
import Queen from "./queen";
import Rook from "./rook";
import Knight from "./knight";
import Bishop from "./bishop";
import Pawn from "./pawn";
import Piece from "./piece";
import Position from "./position";

export default class Game {

    private static instance: Game;
    private pieces: Piece[] = [];
    
    gameTurn: boolean;

    constructor( predefinedPieces ?: any) {

        predefinedPieces.length > 0 ? 
            this.createPredefinedPieces( predefinedPieces ) : 
            this.createDefaultPieces();

        this.gameTurn = true;
    }

    private createPredefinedPieces( ...predefinedPieces: Piece[]) {
        predefinedPieces.forEach( piece => this.pieces.push(piece))
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

    public static getGame(): Game {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }

    public static customGame( ...pieces : Piece[]): Game {

        Game.instance = new Game( pieces );
        return Game.instance;
    }

    showGame(): Piece[] {
        return this.pieces;
    }

    resetGame(): void {
        this.pieces = [];
        this.createDefaultPieces();
        this.gameTurn = true;
    }

    getGameTurn(): string {
        return this.gameTurn ? 'White' : 'Black'
    }

    findPiece( position: any ) {
        console.log(typeof position)
        console.log(position)
        let { currentPosition } = position
        currentPosition = currentPosition as Position
        const movePiece = this.showGame().find( piece => {
            return (
                piece.getPieceFile() == currentPosition.file &&
                piece.getPieceRank() == currentPosition.rank
            )
        })

        return movePiece
    }

    changeTurn(): string {
        this.gameTurn = !this.gameTurn
        return `${this.gameTurn} plays`
    }
}