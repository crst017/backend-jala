// BIND FOR METHODS ABSTRACTION
console.log('\n BIND FOR METHODS ABSTRACTION \n');

let counter = {
    count: 0,
 
    increment: function () {
        // No strict mode!
        return this.count++;
    }
};

console.info( counter.increment() ); // 1
console.info( counter.increment() ); // 2
console.info( counter.increment() ); // 3
console.info( counter.increment() ); // 4
console.info( counter.increment() ); // 5

const getFunctionWithouhContext = counter.increment;
 
// console.info( getFunctionWithouhContext() ); // Error as there isn't any property "count" in the global scope. It's undefined so can't operate ++

// Instead of that you should asociate the object context ( counter ) so it can find the count property and its value

const getFunctionWithContext = getFunctionWithouhContext.bind(counter);
console.info( getFunctionWithContext() ); // 6
console.info( getFunctionWithContext() ); // 7
console.info( getFunctionWithContext() ); // 8
console.info( getFunctionWithContext() ); // 9
console.info( getFunctionWithContext() ); // 10

// The binding gives all the context or information of the object passed as argument so now it can find the count property and its current value

// BIND FOR PARTIAL APLICATIONS

console.log('\n BIND FOR PARTIAL APLICATIONS \n');

function add ( x: number, y: number ) {
    return x + y;
}
 
console.info( add( 3, 4 ) ); // 7

const plus7 = add.bind( undefined, 7 );
 
console.info( plus7( 9 ) ); // 16

// BIND FOR OVERWRITING

console.log('\n BIND FOR OVERWRITING \n');

const logger = {
    separator: '-',
 
    concatenate: function ( ...str : string[] ) {
        return str.join( this.separator );
    }
};
 
console.info( logger.concatenate( 'bind', 'for', 'overwriting',));

const anotherSeparator = {
    separator: '*'
};
 
let concatenateAnotherSeparator = logger.concatenate.bind( anotherSeparator );
console.info( concatenateAnotherSeparator( 'bind', 'for', 'overwriting') );

// BIND FOR SHORTCUTS

console.log('\n BIND FOR SHORTCUTS \n');

const max = Function.prototype.call.bind( Math.max );
 
console.info( max( 10, 20, 15, 25, 5 ) ); // Instead of using Math.max(10, 20, 15, 25, 5)