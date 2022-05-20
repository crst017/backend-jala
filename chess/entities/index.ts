import Bishop from "./bishop";
import Game from "./game";
import King from "./king";
import Knight from "./knight";
import Pawn from "./pawn";
import Position from "./position";
import Queen from "./queen";
import Rook from "./rook";

const queen = new Queen('White','D',1);
const pawn1 = new Pawn('Black','G',4);
const pawn2 = new Pawn('Black','B',1);
const pawn3 = new Pawn('Black','D',7);

const game = Game.getGame( queen, pawn1, pawn2, pawn3);

let position1 = new Position('G',4);
let position2 = new Position('B',1);
let position3 = new Position('D',7);

