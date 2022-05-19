import Game from "./game";
import King from "./king";
import Knight from "./knight";
import Position from "./position";



const king = new King('Black','E',8);
const knight = new Knight('White','F',5);

const game = Game.customGame( king, knight);
console.log(game.showGame())

// console.log(king.canMove(new Position('E',7)))
console.log(knight.getPosition())
console.log(knight.canMove(new Position('E',7)))