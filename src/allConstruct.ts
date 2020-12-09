


const allConstruct = (target: string, wordBank: string[]) : string[][] => {
    if (target === '') return [[]];

    const result = [];
    for (const word of wordBank) {
        if (target.startsWith(word)) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }

    return result;
}

console.log(allConstruct("purple", ["purp",'p','ur','le', 'purpl']));
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd",'ef']));
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(allConstruct("imposssssssssssssssssssssssssssssssssssssssssssssssssssible", ["i","a","p","ib","l","s","o", "m"]));
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee"]));