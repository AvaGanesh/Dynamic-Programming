"use strict";
// fib memoization
let memory = [1, 1];
const fib = (n) => {
    if (n <= 2)
        return 1;
    if (n < memory.length) {
        return memory[n];
    }
    memory[n] = fib(n - 1) + fib(n - 2);
    return memory[n];
};
let x = fib(50);
console.log(x);
//# sourceMappingURL=fib.js.map