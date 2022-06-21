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

// ITERATOR 

// let numbers = {
//     *[Symbol.iterator]() {
//         for (let n = 0; n < 10; n++) {
//             yield n;
//         }
//     }
// };

// for (const number of numbers) {
//     console.log(number);
// }
// const allNumbers = [...numbers];
// let [one, two, ...rest] = numbers;

// console.log(numbers);

// CALL SIGNATURES

// function sum( a:number, b: number): number {
//     return a + b;
// }

// type myFun = ( a:number, b: number) => number;

// type Log = ( message: string, userid?: string) => void;

// type Log2 = {
//     ( message: string, userid?: string): void;
// }

// OVERLOADED FUNCTIONS

// class Reservation {
//     constructor() {

//     }
// }

// type Reserve = {
//     (from: Date, to: Date, destination: string): Reservation
//     (from: Date, destination: string): Reservation
// }


// let reserve: Reserve = ( from: Date, to: Date | string, destination?: string): Reservation => {
//     return new Reservation();
// };

// const myReservation = reserve(new Date(), new Date(), 'COL');
// const myReservation2 = reserve(new Date(), 'COL');
// const myReservation3 = reserve(new Date(), 'COL');

// OVERLOADED FUNCTION TYPES