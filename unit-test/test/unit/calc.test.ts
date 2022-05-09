import { sum } from '../../src/calc';

describe('add function', () => {
    
    it('should return 15 for 10 + 5', () => {
        expect( sum(5,15) ).toBe(20);
    });
    
    it('should return 5 for 2 + 3', () => {
        expect( sum(2,3) ).toBe(5);
    });
});

