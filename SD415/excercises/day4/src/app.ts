

console.log("in app.ts", "sum of [1,2,3] is: ", sum([1, 2, 3]));
/**
 * 
 * @param {number} aa is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(a: number, b: number, c: number): number {
    if (a > b && a > c) {
        return a;
    } if (b > c) {
        return b;
    }
    else return c;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
// let number:number[];
export function sum(arr: number[]): number {

    let sumof: number = 0;
    for (let numSum of arr) {
        sumof = sumof + numSum;
    }
    return sumof;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */



export function multiply(arr: number[]): number {
    let multipleof: number = 1;
    for (let multi of arr) {
        multipleof = multipleof * multi;
    }
    return multipleof;

}
/* findLongestWord */
/**
 * takes an array of words and returns the length of the longest one
 * @param {*} arr of words 
 * @returns {number} length of longest word
 */
export function findLongestWord(arr: string[]): number {
    if (arr.length === 0) {
        // Return 0 for an empty array
        return 0;
      }
    let maxWord: number = 0;
    let wordLength: number;
    
    for (let word of arr) {
        wordLength = word.length;
        if (wordLength > maxWord) {
            maxWord = wordLength
        }
    }
    return maxWord;
}

export function reverseArray(arr: any[]): any[]{
    let newArr:any[] = []
    for(let i=0;i<arr.length;i++){
        newArr.push(arr.pop());
    }
    return newArr;

}
export function reverseArrayInPlace(arr:any[]): any[]{
    const reversedArr=arr.reverse();
    return reversedArr;

}

/* 6. Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows:
describe("generate array", function () {
    const expected33 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected23 = [ [1, 2, 3], [4, 5, 6]];
    const expected21 = [ [1], [2]];
     assert.deepEqual(generateArray(3,3), expected33); */

/**
 * 
 * @param {*} rows num rows
 * @param {*} cols num cols
 * @returns {Array} 2d array with entries i + j
 */
export function generateArray(rows: number, cols: number): number[][] {
    let newArr:number[][]=[];
    let arrItems:number=0;
    let colValue:number=0;
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            newArr.push();
            newArr
        }
    }

    return [[0]];
}