import Position from '../../../position';
import Pawn from '../../../pawn';
import Game from '../../../game';

let whitePawn = new Pawn('White','C',2);
let blackPawn = new Pawn('Black','G',7);

Game.getGame(whitePawn, blackPawn);

it( 'White pawn should not move diagonally' , () => {
    let position = new Position('D',3);
    expect(whitePawn.canMove(position)).toBe(false);
});

it( 'White pawn should move front 1 place' , () => {
    let position = new Position('C',3);
    expect(whitePawn.canMove(position)).toBe(true);
});

it( 'White pawn should move front 2 places, from initial position' , () => {
    let position = new Position('C',4);
    expect(whitePawn.canMove(position)).toBe(true);
});

it( 'White pawn should not move front 2 places' , () => {
    let position = new Position('C',5);
    expect(whitePawn.canMove(position)).toBe(false);
});

it( 'White pawn should not move backward 1 place' , () => {
    let position = new Position('C',1);
    expect(whitePawn.canMove(position)).toBe(false);
});

it( 'White pawn should not move to the side' , () => {
    let position = new Position('D',2);
    expect(whitePawn.canMove(position)).toBe(false);
});

it( "Shouldn't move to the same place" , () => {
    let position = new Position('C',2);
    expect(blackPawn.canMove(position)).toBe(false);
});
// Black pawn

it( 'Black pawn should move front 1 place' , () => {
    let position = new Position('G',6);
    expect(blackPawn.canMove(position)).toBe(true);
});

it( 'Black pawn should move front 2 places, from initial position' , () => {
    let position = new Position('G',5);
    expect(blackPawn.canMove(position)).toBe(true);
});

it( 'Black pawn should not move front 2 places' , () => {
    let position = new Position('G',8);
    expect(blackPawn.canMove(position)).toBe(false);
});

it( 'Black pawn should not move backward 1 place' , () => {
    let position = new Position('G',8);
    expect(blackPawn.canMove(position)).toBe(false);
});

it( 'Black pawn should not move to the side' , () => {
    let position = new Position('F',7);
    expect(blackPawn.canMove(position)).toBe(false);
});


