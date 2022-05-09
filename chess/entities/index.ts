import Game from "./game";
import King from "./king";
import Position from "./position";

// const game = Game.getGame();

const king = new King('White','C',1);
console.log(king.canMove(new Position('C',2)))
console.log(king.canMove(new Position('A',1)))
console.log(king.canMove(new Position('D',1)))
console.log(king.canMove(new Position('D',2)))
console.log(king.canMove(new Position('C',3)))
// console.log(king.canMove(new Position('B',2)))
// console.log(king.canMove(new Position('B',2)))
// console.log(king.canMove(new Position('B',2)))
// console.log(king.canMove(new Position('B',2)))
// console.log(king.canMove(new Position('B',2)))