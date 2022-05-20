import Bishop from "../../../bishop";
import Game from "../../../game";
import King from "../../../king";
import Pawn from "../../../pawn";
import Position from "../../../position";
import Queen from "../../../queen";

const king = new King('White','E',1);
const queen = new Queen('Black','D',8);
const pawn = new Pawn('White','E',2);
const bishop = new Bishop('White','F',1);

Game.getGame(king, queen, pawn, bishop);

it( 'Movement should not be blocked' , () => {
    let position = new Position('D',1);
    expect(king.canMove(position)).toBe(false);
});

it( 'Movement should not be blocked' , () => {
    let position = new Position('E',2);
    expect(king.canMove(position)).toBe(false);
});

it( 'Movement should be blocked' , () => {
    let position = new Position('F',2);
    expect(king.canMove(position)).toBe(true);
});
