import Game from '../../../game';
import Pawn from '../../../pawn';
import Position from '../../../position';
import Rook from '../../../rook';

const rook = new Rook('White','A',1)
const pawn = new Pawn('White','A',2)

Game.getGame(rook,pawn)

it( 'Movement should be blocked' , () => {
    const position = new Position('A',5);
    expect(rook.canMove(position)).toBe(false);
});

it( 'Movement should not be blocked' , () => {
    let position = new Position('E',1);
    expect(rook.canMove(position)).toBe(true);
});
