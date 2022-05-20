import Bishop from "../../../bishop";
import Game from "../../../game";
import Pawn from "../../../pawn";
import Position from "../../../position";

const bishop = new Bishop('White','C',1);
const pawn = new Pawn('Black','G',5);

Game.getGame( bishop, pawn);

it( 'Pawn must be captured' , () => {
    let position = new Position('G',5);
    bishop.moveTo(position);
    const captured = pawn.getCapturedStatus();
    expect(captured).toBe(true);
});