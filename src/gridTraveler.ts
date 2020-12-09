/*
    Say that you are a traveler on a 2D grid. You begin in the top-left corner
    and your goal is to travel to the bottom-right corner.You may only move down or right.

    In how many ways can you travel to the goal on a grid with dimension m*n?
*/


/*
    gridTraveler(2,3) = 3

    [['S',' ', ' '],
     [' ', ' ', 'E']]

    1. Right, Right, Down
    2. Right, Down, Right
    3. Down, Right, Right


    gridTraveler(2,3) ==  gridTraveler(3,2);
*/

let memo = new Map();
const gridTraveler = (m: number, n: number) : number => {
    const key = m + ',' + n;
    const altKey = n + ',' + m;
    if(memo.has(key)) return memo.get(key);
    if(memo.has(altKey)) return memo.get(altKey);

    if(m === 0 || n === 0) return 0; // Invalid or empty grid
    if(m === 1 || n === 1) return 1;
    // While moving down decrease rows m, while moving to the right decrease the cols n
    const res = gridTraveler(m - 1, n) + gridTraveler(m, n-1);
    memo.set(key, res);
    memo.set(altKey, res);
    return res;
}


/*
    Add current cell value to the right neighbor and down neighbor

*/
const gridTravelerTab = (m: number, n: number): number => {
    const table = Array(m+1).fill(0).map(() => Array(n+1).fill(0));
    table[1][1] = 1;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const currentElem = table[i][j];
            if(j+1 <= n) table[i][j+1] += currentElem;
            if(i+1 <= m) table[i+1][j] += currentElem;
        }
    }
    return table[m][n];
}


// console.log(gridTraveler(2,3));
// console.log(gridTraveler(3,2));
// console.log(gridTraveler(3,3));
// console.log(gridTraveler(16,18));
// console.log(gridTraveler(18,16));



console.log(gridTravelerTab(2,3));
console.log(gridTravelerTab(3,2));
console.log(gridTravelerTab(3,3));
console.log(gridTravelerTab(16,18));
console.log(gridTravelerTab(18,16));

