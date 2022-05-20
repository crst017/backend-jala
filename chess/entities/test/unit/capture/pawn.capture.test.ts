import Game from "../../../game";
import Pawn from "../../../pawn";
import Position from "../../../position";

const pawn = new Pawn('White','D',4);
const pawn2 = new Pawn('Black','D',5);
const pawn3 = new Pawn('Black','E',5);

Game.getGame( pawn, pawn2, pawn3);

it( 'Black pawn must be captured' , () => {
    let position = new Position('E',5);
    pawn.moveTo(position);
    const captured = pawn3.getCapturedStatus();
    expect(captured).toBe(true);
});