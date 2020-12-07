"use strict";
/*
    canSum(7,[5,3,4,7]) => true

    canSum(7, [2,3]) => false
*/
const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum === 0)
        return true;
    if (targetSum < 0)
        return false;
    for (const num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo)) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
};
console.log(canSum(7, [2, 4]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
//# sourceMappingURL=canSum.js.map