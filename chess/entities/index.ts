import Bishop from "./bishop";
import Game from "./game";
import King from "./king";
import Knight from "./knight";
import Pawn from "./pawn";
import Position from "./position";
import Queen from "./queen";
import Rook from "./rook";

// const king = new King('White','E',1);
// const knight = new Knight('Black','C',3);
// Game.getGame(king, knight);
// console.log(game.showGame())
// console.log(game.getPieces())
// const position = new Position('E',2);
// console.log(king.canMove(position));

// const rook = new Rook('White','A',1);
// const rook2 = new Rook('Black','A',8);
// const rook3 = new Rook('Black','H',8);
// const newPosition = new Position('A',8);
// const newPosition2 = new Position('A',2);
// const newPosition3 = new Position('H',1);
// const newPosition4 = new Position('C',8);

// const trayectory = rook.calculateVerticalPath(newPosition);
// const trayectory2 = rook2.calculateVerticalPath(newPosition2);

// const trayectory3 = rook.calculateHorizontalPath(newPosition3);
// const trayectory4 = rook3.calculateHorizontalPath(newPosition4);

// console.log(trayectory);
// console.log(trayectory2);
// console.log(trayectory3);
// console.log(trayectory4);

// const bishop = new Bishop('White','D',4);
// const newPosition = new Position('A',1);

// const trajectory = bishop.calculateDiagonalPath(newPosition);
// console.log(trajectory) 

// BLOCK TEST ROOK
// const rook = new Rook('White','A',1)
// const pawn = new Pawn('White','A',2)

// Game.getGame(rook,pawn)

// const newPosition1 = new Position('A',5);
// const newPosition2 = new Position('E',1);

// console.log(rook.canMove(newPosition1)) // false
// console.log(rook.canMove(newPosition2)) // true

// BLOCK TEST BISHOP

const pawn = new Pawn('White','A',3);
const bishop = new Bishop('White','C',1);

Game.getGame(pawn,bishop);

const newPosition1 = new Position('A',3);
const newPosition2 = new Position('G',5);

console.log(bishop.canMove(newPosition1)); // false
console.log(bishop.canMove(newPosition2)); // true


// QUEEN BLOCK TEST
// const queen = new Queen('White','D',1);
// const pawn1 = new Pawn('Black','C',2);
// const pawn2 = new Pawn('Black','D',2);
// const pawn3 = new Pawn('Black','E',2);
// const bishop = new Bishop('White','C',1);

// Game.getGame(queen, pawn1, pawn2, pawn3, bishop);

// const newPosition1 = new Position('D',5); //false
// const newPosition2 = new Position('A',1); //false
// const newPosition3 = new Position('A',4); //false
// const newPosition4 = new Position('H',1); //true

// console.log(queen.canMove(newPosition1))
// console.log(queen.canMove(newPosition2))
// console.log(queen.canMove(newPosition3))
// console.log(queen.canMove(newPosition4))

// KING BLOCK TEST
// const king = new King('White','E',1);
// const queen = new Queen('Black','D',8);
// const pawn = new Pawn('White','E',2);
// const bishop = new Bishop('White','F',1);

// const newPosition1 = new Position('D',1); // flase - check
// const newPosition2 = new Position('E',2); // false
// const newPosition3 = new Position('F',2); // true

// Game.getGame(king, queen, pawn, bishop);
// console.log(king.canMove(newPosition1))
// console.log(king.canMove(newPosition2))
// console.log(king.canMove(newPosition3))

// PAWN BLOCK TEST

// const pawn = new Pawn('White','E',4);
// const pawn2 = new Pawn('Black','E',5);

// const newPosition1 = new Position('E',5); // false
// const newPosition2 = new Position('E',6); // false
// const newPosition3 = new Position('F',4); // false
// const newPosition4 = new Position('F',5); // false

// Game.getGame(pawn, pawn2);
// console.log(pawn.canMove(newPosition1))
// console.log(pawn.canMove(newPosition2))
// console.log(pawn.canMove(newPosition3))
// console.log(pawn.canMove(newPosition4))


// KNIGHT BLOCK TEST
// const knight = new Knight('White','B',1);
// const pawn = new Pawn('White','B',2);
// const pawn2 = new Pawn('White','C',2);
// const pawn3 = new Pawn('White','A',3);

// Game.getGame(knight, pawn, pawn2, pawn3);

// const newPosition1 = new Position('C',3); // true
// const newPosition2 = new Position('A',3); // false

// console.log(knight.canMove(newPosition1));
// console.log(knight.canMove(newPosition2));


