
/*
    m = targetSum
    n = numbers.length

    time: o(m^2*n)
    space: o(m*m)

*/


const bestSum = (targetSum: number, numbers: number[], memo: MemoMap = {}): number[] | null  => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;
    for(const num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
          const combination = [...remainderCombination, num];

        //   If combination is shorter than the current shortest update it
            if(shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

console.log(bestSum(7, [2, 4]));
console.log(bestSum(7,[5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(300, [7, 14]));
console.log(bestSum(100, [1,5,10,20,25]));

