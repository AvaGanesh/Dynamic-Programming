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
// fib Tabulation 
const fibTab = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[n];
};
let x = fib(50);
console.log(x);
console.log(fibTab(50));
//# sourceMappingURL=fib.js.map