import King from '../../king';
import Position from '../../position';

// let king: King;

let king = new King('White','E',1);


it( 'Should move one place forward' , () => {
    let position = new Position('E',2);
    expect(king.canMove(position)).toBe(true);
});

it( 'Should move one place to the left' , () => {
    let position = new Position('D',1);
    expect(king.canMove(position)).toBe(true);
});

it( 'Should move one place to the right' , () => {
    let position = new Position('F',1);
    expect(king.canMove(position)).toBe(true);
});

it( 'Should move one position forward and one to the left' , () => {
    let position = new Position('D',2);
    expect(king.canMove(position)).toBe(true);
});

it( "Shouldn't move more than one place forward" , () => {
    let position = new Position('E',3);
    expect(king.canMove(position)).toBe(false);
});

it( "Shouldn't move more than one place to the right" , () => {
    let position = new Position('G',1);
    expect(king.canMove(position)).toBe(false);
});

it( "Shouldn't move to the same place" , () => {
    let position = new Position('E',1);
    expect(king.canMove(position)).toBe(false);
});


