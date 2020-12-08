/*
    Write a function `canConstruct(target, wordBank)` that accepts a target
    string and an array of strings.

    The function should return a boolean indicating whether or not the
    `target` can be constructed by concatenating elements of `wordBank` array.

    m = target.length
    n = wordBank.length

    time => O(n*m^2)
    space => O(m^2)
*/

interface MemoObjI {
    [key: string]: boolean;
}


const canConstruct = (target: string, wordBank: string[], memo: MemoObjI = {}): boolean => {
    if (target in memo) return memo[target];
    if (target === '') return true;

    for(const word of wordBank) {
        // target.indexOf(word) === 0
        if (target.startsWith(word)) {
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank, memo)) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(canConstruct("imposssssssssssssssssssssssssssssssssssssssssssssssssssible", ["i","a","p","ib","l","s","o", "m"]));
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee"]));