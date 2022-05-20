import Game from "../../../game";
import Knight from "../../../knight";
import Pawn from "../../../pawn";
import Position from "../../../position";

const knight = new Knight('White','B',1);
const pawn = new Pawn('White','B',2);
const pawn2 = new Pawn('White','C',2);
const pawn3 = new Pawn('White','A',3);

Game.getGame(knight, pawn, pawn2, pawn3);

it( 'Movement should be blocked' , () => {
    const position = new Position('C',3);
    expect(knight.canMove(position)).toBe(true);
});

it( 'Movement should not be blocked' , () => {
    const position = new Position('A',3);
    expect(knight.canMove(position)).toBe(false);
});
