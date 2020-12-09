
interface Memonumber {
    [key: string]: number
}

const countConstruct = (target: string, wordBank: string[], memo: Memonumber = {}) : number => {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let totalCount = 0;
    for (const word of wordBank) {
        if (target.startsWith(word)) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest;
        }
    }

    memo[target] = totalCount;
    return totalCount;
}


console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(countConstruct("imposssssssssssssssssssssssssssssssssssssssssssssssssssible", ["i","a","p","ib","l","s","o", "m"]));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee"]));