import Position from '../../position';
import Knight from '../../knight';
import King from '../../king';
import Game from '../../game';


const king = new King('White','E',1);
const knight = new Knight('Black','C',3);
const knight2 = new Knight('Black','H',2);

Game.getGame(king, knight, knight2);

it( 'King should not move into check' , () => {
    const position = new Position('E',2);
    expect(king.canMove(position)).toBe(false);
});

it( 'King should not move into check' , () => {
    let position = new Position('D',1);
    expect(king.canMove(position)).toBe(false);
});

it( 'King should not move into check' , () => {
    let position = new Position('F',1);
    expect(king.canMove(position)).toBe(false);
});

it( 'King should move diagonally' , () => {
    let position = new Position('D',2);
    expect(king.canMove(position)).toBe(true);
});