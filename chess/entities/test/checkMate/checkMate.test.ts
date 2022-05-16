import King from '../../king';
import Position from '../../position';


let king = new King('White','E',1);

it( 'Should not move into check mate' , () => {
    let position = new Position('D',1);
    expect(king.canMove(position)).toBe(false);
});

it( 'Should move if not check mate' , () => {
    let position = new Position('E',2);
    expect(king.canMove(position)).toBe(true);
});