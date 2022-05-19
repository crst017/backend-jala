import Position from '../../position';
import Bishop from '../../bishop';
import Game from '../../game';

let bishop = new Bishop('White','E',4);
Game.getGame(bishop);

it( 'Should move front right 1 place' , () => {
    let position = new Position('F',5);
    expect(bishop.canMove(position)).toBe(true);
});

it( 'Should move front right more than one place' , () => {
    let position = new Position('H',7);
    expect(bishop.canMove(position)).toBe(true);
});

it( 'Should move front left 1 place' , () => {
    let position = new Position('D',5);
    expect(bishop.canMove(position)).toBe(true);
});

it( 'Should move front left more than one place' , () => {
    let position = new Position('A',8);
    expect(bishop.canMove(position)).toBe(true);
});

// Backward 

it( 'Should move back right 1 place' , () => {
    let position = new Position('D',3);
    expect(bishop.canMove(position)).toBe(true);
});

it( 'Should move back right more than one place' , () => {
    let position = new Position('B',1);
    expect(bishop.canMove(position)).toBe(true);
});

it( 'Should move back left 1 place' , () => {
    let position = new Position('F',3);
    expect(bishop.canMove(position)).toBe(true);
});

it( 'Should move back left more than one place' , () => {
    let position = new Position('H',1);
    expect(bishop.canMove(position)).toBe(true);
});

// Vertically and horizontally
it( "Shouldn't move forward" , () => {
    let position = new Position('E',8);
    expect(bishop.canMove(position)).toBe(false);
});

it( "Shouldn't move to the side" , () => {
    let position = new Position('H',4);
    expect(bishop.canMove(position)).toBe(false);
});

// As a knight
it( "Shouldn't move as a knight" , () => {
    let position = new Position('F',6);
    expect(bishop.canMove(position)).toBe(false);
});

// Same place
it( "Shouldn't move to the same place" , () => {
    let position = new Position('E',4);
    expect(bishop.canMove(position)).toBe(false);
});
