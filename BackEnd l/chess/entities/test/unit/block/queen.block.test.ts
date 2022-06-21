import Bishop from "../../../bishop";
import Game from "../../../game";
import Pawn from "../../../pawn";
import Position from "../../../position";
import Queen from "../../../queen";

const queen = new Queen('White','D',1);
const pawn1 = new Pawn('Black','C',2);
const pawn2 = new Pawn('Black','D',2);
const pawn3 = new Pawn('Black','E',2);
const bishop = new Bishop('White','C',1);

Game.getGame(queen, pawn1, pawn2, pawn3, bishop);

it( 'Movement should be blocked' , () => {
    let position = new Position('D',5);
    expect(queen.canMove(position)).toBe(false);
});

it( 'Movement should be blocked' , () => {
    let position = new Position('A',1);
    expect(queen.canMove(position)).toBe(false);
});

it( 'Movement should be blocked' , () => {
    let position = new Position('A',4);
    expect(queen.canMove(position)).toBe(false);
});

it( 'Movement should not be blocked' , () => {
    let position = new Position('H',1);
    expect(queen.canMove(position)).toBe(true);
});