import Game from "../../../game";
import Pawn from "../../../pawn";
import Position from "../../../position";
import Queen from "../../../queen";

const queen = new Queen('White','D',1);
const pawn1 = new Pawn('Black','G',4);
const pawn2 = new Pawn('Black','B',1);
const pawn3 = new Pawn('Black','D',7);

const originalPosition = new Position('D',1);

Game.getGame( queen, pawn1, pawn2, pawn3);

it( 'Black pawn must be captured' , () => {
    let position = new Position('G',4);
    queen.moveTo(position);
    const captured = pawn1.getCapturedStatus();
    expect(captured).toBe(true);
});

it( 'Black pawn must be captured' , () => {
    queen.moveTo(originalPosition);
    let position = new Position('B',1);
    queen.moveTo(position);
    const captured = pawn2.getCapturedStatus();
    expect(captured).toBe(true);
});

it( 'Black pawn must be captured' , () => {
    queen.moveTo(originalPosition);
    let position = new Position('D',7);
    queen.moveTo(position);
    const captured = pawn3.getCapturedStatus();
    expect(captured).toBe(true);
});