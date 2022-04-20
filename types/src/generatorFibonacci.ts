function* fibo() {
    let n = 0;
    let number = [ 1, 1];
    while(true) {
        number.push( number[n] + number[n+1]);
        yield number[n++]; 
    }
}

const fib = fibo();
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());