import Game from "./game";
import King from "./king";
import Pawn from "./pawn";
import Position from "./position";

const game = Game.getGame();
let blackPawn = new Pawn('Black','G',7);

// let king = new King('White','E',1);
console.log(blackPawn.canMove(new Position('G',5)))