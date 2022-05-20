import Position from '../../../position';
import King from '../../../king';
import Game from '../../../game';

let king = new King('White','E',3);
Game.getGame(king);

it( 'Should move one place forward' , () => {
    let position = new Position('E',4);
    expect(king.canMove(position)).toBe(true);
});