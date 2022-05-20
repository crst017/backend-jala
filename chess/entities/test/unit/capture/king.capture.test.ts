import Game from "../../../game";
import King from "../../../king";
import Pawn from "../../../pawn";
import Position from "../../../position";

const king = new King('White','E',1);
const pawn = new Pawn('Black','D',2);

Game.getGame( king, pawn);

it( 'Black pawn must be captured' , () => {
    let position = new Position('D',2);
    king.moveTo(position);
    const captured = pawn.getCapturedStatus();
    expect(captured).toBe(true);
});