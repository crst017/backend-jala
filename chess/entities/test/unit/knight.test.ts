import Position from '../../position';
import Knight from '../../knight';

let knight = new Knight('White','C',3);

it( 'Should move two places forward and one to the left' , () => {
    let position = new Position('B',5);
    expect(knight.canMove(position)).toBe(true);
});

it( 'Should move two places forward and one to the right' , () => {
    let position = new Position('D',5);
    expect(knight.canMove(position)).toBe(true);
});

it( 'Should move one place forward and two to the left' , () => {
    let position = new Position('A',4);
    expect(knight.canMove(position)).toBe(true);
});

it( 'Should move one place forward and two to the right' , () => {
    let position = new Position('E',4);
    expect(knight.canMove(position)).toBe(true);
});

it( 'Should move two places backward and one to the left' , () => {
    let position = new Position('B',1);
    expect(knight.canMove(position)).toBe(true);
});

it( 'Should move two places backward and one to the right' , () => {
    let position = new Position('D',1);
    expect(knight.canMove(position)).toBe(true);
});

it( 'Should move one place backward and two to the left' , () => {
    let position = new Position('A',2);
    expect(knight.canMove(position)).toBe(true);
});

it( 'Should move one place backward and two to the right' , () => {
    let position = new Position('E',2);
    expect(knight.canMove(position)).toBe(true);
});

it( "Shouldn't move forward" , () => {
    let position = new Position('C',6);
    expect(knight.canMove(position)).toBe(false);
});

it( "Shouldn't move to the right" , () => {
    let position = new Position('F',3);
    expect(knight.canMove(position)).toBe(false);
});

it( "Shouldn't move to the left" , () => {
    let position = new Position('A',3);
    expect(knight.canMove(position)).toBe(false);
});

it( "Shouldn't move diagonally" , () => {
    let position = new Position('D',4);
    expect(knight.canMove(position)).toBe(false);
});

it( "Shouldn't move to the same place" , () => {
    let position = new Position('C',3);
    expect(knight.canMove(position)).toBe(false);
});





