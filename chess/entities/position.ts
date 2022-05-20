import Game from './game';
import { File, Rank } from './types';

export default class Position {
    constructor(
        protected file: File,
        protected rank: Rank
    ) {
    }
    
    getFile() {
        return this.file.charCodeAt(0);
    }
    
    getRank() {
        return this.rank;
    }

    positionIsOccupied() : boolean {

        const gameInstance = Game.getGame()
        const gamePieces = gameInstance.getPieces()
        let positionOccupied = false; 

        gamePieces.forEach( piece => {

            const sameRank = this.getRank() == piece.getPieceRank();
            const sameFile = this.getFile() == piece.getPosition().getFile();
            const samePosition = sameRank && sameFile

            if( samePosition ) {
                positionOccupied = true;
            }
        })     
        return positionOccupied
    }
}