// FUNCTIONS
// Parameters -> Optional, Default, Rest

// import { create } from 'ts-node';

// 5 Different ways of declaring functions

// Named function
// function greet( name: string) {
//     return 'hello ' + name;
// }

// // Expressed function
// const greet2 = function( name: string) {
//     return 'hello ' + name;
// };

// // Arrow function 
// const greet3 = ( name: string ) => {
//     return 'hello' + name;
// };

// // Arrow function shorthand
// const greet31 = ( name: string ) => 'hello' + name;

// // Not recommended
// const greet4 = new Function('name', 'return "Hello " + name');

// // ----- OPTIONAL PARAMETERS -----

// function log( message: string, userId?: string ) {
//     console.log(message, userId || 'Not signed in');
// }

// // ----- DEFAULT PARAMETERS -----

// function logDefault( message: string, userId = 'Not signed in' ) {
//     console.log(message, userId);
// }

// // ----- REST PARAMETERS ----- 

// function sum( numbers: number[] ): number{
//     return numbers.reduce((total, n) => total + n, 0);
// }

// sum([1,3,2]);

// // Everything is inferred using the input type
// function sumREST( initialValue: number, ...numbers : number[]): number {
//     return numbers.reduce((total, n) => total + n, initialValue);
// }

// sumREST(4,1,2,3,4);

// CALL, APPLY, BIND 


// const counter = {
//     count: 0,
//     increment: function () {
//         'use strict';
//         return ++this.count; // 'this' refers to the 'counter' object
//     }
// };

// // GENERATORS

// function* createNumbers() {
//     let n = 0;
//     while(true) {
//         yield n++;
//     }
// }

// const numbers = createNumbers();
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());



