import Game from '../../../game';
import Position from '../../../position';
import Queen from '../../../queen';

let queen = new Queen('White','D',4);

Game.getGame(queen);

it( 'Should move one place forward' , () => {
    let position = new Position('D',5);
    expect(queen.canMove(position)).toBe(true);
});

it( 'Should move more than one place forward' , () => {
    let position = new Position('D',7);
    expect(queen.canMove(position)).toBe(true);
});

it( 'Should move one place to the right' , () => {
    let position = new Position('E',4);
    expect(queen.canMove(position)).toBe(true);
});

it( 'Should move more than one place to the left' , () => {
    let position = new Position('A',4);
    expect(queen.canMove(position)).toBe(true);
});

it( 'Should move more one place diagonally' , () => {
    let position = new Position('E',3);
    expect(queen.canMove(position)).toBe(true);
});

it( 'Should move more than one place diagonally' , () => {
    let position = new Position('G',7);
    expect(queen.canMove(position)).toBe(true);
});

it( 'Should not move as a knight' , () => {
    let position = new Position('E',6);
    expect(queen.canMove(position)).toBe(false);
});

