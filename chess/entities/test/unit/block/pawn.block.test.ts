import Game from "../../../game";
import Pawn from "../../../pawn";
import Position from "../../../position";

const pawn = new Pawn('White','E',4);
const pawn2 = new Pawn('Black','E',5);

Game.getGame(pawn, pawn2);

it( 'Movement should be blocked' , () => {
    let position = new Position('E',5);
    expect(pawn.canMove(position)).toBe(false);
});

it( 'Movement should be blocked' , () => {
    let position = new Position('E',6);
    expect(pawn.canMove(position)).toBe(false);
});

it( 'Movement should be blocked' , () => {
    let position = new Position('F',4);
    expect(pawn.canMove(position)).toBe(false);
});

it( 'Movement should be blocked' , () => {
    let position = new Position('F',5);
    expect(pawn.canMove(position)).toBe(false);
});