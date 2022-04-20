// ANY TYPE
// const a: any = 5;
// const b: any = 3;

// const c = a + b;

// UNKNOWN TYPE

// const a: unknow = 30;
// const b = a === 123;
// // const c = a + 10;

// if( typeof a === 'number') {
//     let c = a + 10;
//     c = c + 10;
// }

// BOOLEAN

// const a = true;

// const b = false;
// const c = true;

// const d = true;
// const e: true = true; 

//NUMBER

// const a = 123;
// const b = Infinity * 0.1;
// const c = 5678;
// const d = a < c;
// const d2 = a / 0;

// const e: number  = 100;
// const f: 3.14 = 3.14;
// const g: 5.5 = 6;

// const million: 1_000_000 = 1_000_000;
// const twoMillion = 2_000_000;

// const a = 132n;

//STRING

// const a = 'text';
// const b = 'text2';

// const c = '!';

// const d = a + '' + b + c;

// const e: string = 'text';

// const f: 'pedro' = 'pedro';
// const g: 'pedro' = 'zoe';

// SYMBOL

// solo es igual a si mismo, de resto son diferentes 

// const a = Symbol('a');
// const b: symbol = Symbol('b');

// const a2 = Symbol('a');
// const c = a === b;
// const c2 = a === b;
// const e = a === a2;
// const f = a === a;

// const g: unique symbol = Symbol('g');

// OBJECT

// const a: object = {
//     b : 'x'
// };

// a.c;
// a.b;

// const b = {
//     c: {
//         d: 'f'
//     }
// };

// b.c.d;

// const b2 : {
//     c: {
//         d: 'f'
//     }
// } = {
//     c: {
//         d: 'f'
//     }
// };

// const c: { b : number } = {
//     b: 12
// };


// CLASS
// let d : {
//     firstName: string,
//     lastName: string
// } = {
//     firstName: 'pedro',
//     lastName: 'perez'
// };

// class Person {
//     constructor(
//         public firstName: string,
//         public lastName: string
//     ){}
// }

// d = new Person('cristian','navarro');

// let a: {
//     b: number,
//     c?: string,
//     [key: number]: boolean
// };

// a = {
//     b: 1,
//     5: true,
//     10: true
// };

// let tickets: {
//     [seatNumber: string]: string
// };

// const ticket: tickets = {
//     '1D' : 'Pedro',
//     '2D' : 'Pedro',
//     '3D' : 'Pedro',
// };

// ALIAS , palabra reservada type y usarlo explicitamente

// type Age = number ;
// type Person = {
//     name : string,
//     age: Age
// }

// const age: Age = 55;

// // UNION INTERSECCION

// type Cat = {
//     name : string,
//     purrs : boolean
// }
// type Dog = {
//     name : string,
//     barks : boolean,
//     wags : boolean
// }

// type CatOrDogOrBoth = Cat | Dog;
// type CatAndDog = Cat & Dog;

// const b = {
//     name: 'Lilo',
//     purrs: true
// };

// let a: CatOrDogOrBoth = {
//     name: 'dark',
//     barks: true,
//     wags: true
// };

// a = {
//     name: 'Lilo',
//     purrs: true,
//     barks: true,
//     wags: true
// };

// ARRAYS

// const a = [1,2];
// const b = ['1','2','test'];
// const c : string[] = ['a'];

// const d = [1,'a'];

// type Mix = string | number;

// let d = [1,'a'];
// const e = [1,'a'];
// const f = ['red'];
// f.push('blue');

// const g = [];
// g.push(1);
// g.push('1');

// let a = [1,'a'];

// a.map( _ => {
//     if(typeof _ === 'number') {
//         return _ * 3;
//     }
// });

// FUNCTIONS

// function buildArray() : (string | number)[]{
//     const a = [];
//     a.push(1);
//     a.push('1');
//     return a;
// }

// const myArray = buildArray();
// myArray.push('test');
// // myArray.push(true);

// // let b : [string,string,string] = ['test','test2', 123 ];

// const trainFares: [number,number?][] = [

//     [3.75],
//     [5, 7.7],
//     [9]
// ];

// const trainFares2: ([number] | [number, number])[] = [

//     [3.75],
//     [5, 7.7],
//     [9]
// ];

// let names: [string, ...string[]] = ['sara'];
// names = ['sara', 'pepe', 'maria'];
// names = [''];

// let list: [number, boolean, ...string[]] = [5, true];
// list = [5, false, 'sara', 'pepe'];



//READ ONLY

// ENUMS

// enum Language {
//     English = 0,
//     Spanish = 1,
//     Russian = 2
// }

// enum Language {
//     Italian
// }

// const testEnum = Language.Spanish;

// let c = 'pineapples';
// const d = [ true, true , true ];
// const e = {
//     type: 'ficus'
// };

// const h = null;

// let e: true = true; // Literal string
// const bigNumber: 2_000_000 = 2_000_000; // Literal string 

// class Person {
//     constructor(
//         private fN: string,
//         public lN: string
//     ){}
// }


// c = new Person('mat','string');

