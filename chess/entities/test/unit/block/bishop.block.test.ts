import Bishop from "../../../bishop";
import Game from "../../../game";
import Pawn from "../../../pawn";
import Position from "../../../position";

const pawn = new Pawn('White','A',3);
const bishop = new Bishop('White','C',1);

Game.getGame(pawn,bishop);

it( 'Movement should not be blocked' , () => {
    const position = new Position('A',3);
    expect(bishop.canMove(position)).toBe(false);
});

it( 'Movement should be blocked' , () => {
    const position = new Position('G',5);
    expect(bishop.canMove(position)).toBe(true);
});
