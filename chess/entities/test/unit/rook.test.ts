import Position from '../../position';
import Rook from '../../rook';

let rook = new Rook('White','A',1);

it( 'Should move one place forward' , () => {
    let position = new Position('A',2);
    expect(rook.canMove(position)).toBe(true);
});

it( 'Should move one place to the right' , () => {
    let position = new Position('B',1);
    expect(rook.canMove(position)).toBe(true);
});

it( 'Should move 8 places forward' , () => {
    let position = new Position('A',8);
    expect(rook.canMove(position)).toBe(true);
});

it( 'Should move 8 places to the right' , () => {
    let position = new Position('H',1);
    expect(rook.canMove(position)).toBe(true);
});

it( 'Should not move diagonally' , () => {
    let position = new Position('B',2);
    expect(rook.canMove(position)).toBe(false);
});

it( "Shouldn't move as the knight" , () => {
    let position = new Position('B',3);
    expect(rook.canMove(position)).toBe(false);
});

it( "Shouldn't move to the same place" , () => {
    let position = new Position('A',1);
    expect(rook.canMove(position)).toBe(false);
});


