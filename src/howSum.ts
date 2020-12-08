/*
    Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array
    of numbers as arguments.

    The function should return an array containing any combination of elements that add up
    to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null

    If there are multiple combinations that are possible, you may return single one


    howSum(8,[2,3,5]) => [3,5]

    m = targetSum
    n = array length

    Time complexity => O(n*m^2)
    Space complexity => O(m^2)
*/
interface MemoMap {
    [key: number]: number[] | null
}

const howSum = (targetSum: number, numbers: number[], memo: MemoMap = {}): any => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(const num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if(remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num];
            return [...remainderResult, num];
        }
    }

    memo[targetSum] = null;
    return null;
}


console.log(howSum(7, [2,4]));
console.log(howSum(7, [2,5,3,4]));
console.log(howSum(300, [7, 14]));

