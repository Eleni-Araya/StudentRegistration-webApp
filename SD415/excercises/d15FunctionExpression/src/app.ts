/**
 * Doubles a given number.
 *
 * @param {number} number - The number to be doubled.
 * @returns {number} The result of doubling the input number.
 */
export function double(number: number): number {
    return number * 2;
  }
  
  // Example usage:
  const result1 = double(5); // result is 10

/**
 * Multiplies a given number by 100.
 *
 * @param {number} number - The number to be multiplied by 100.
 * @returns {number} The result of multiplying the input number by 100.
 */
export function times100(number: number): number {
    return number * 100;
  }
  
  // Example usage:
  const result2 = times100(5); // result is 500

  /**
 * Applies a given function to each element of an array and returns a new array.
 *
 * @param {Array<any>} array - The input array.
 * @param {function} fn - The function to apply to each element.
 * @returns {Array<any>} A new array with the function applied to each element.
 */
export function myMap(array: Array<any>, fn: (value: any) => any): Array<any> {
    const result = [];
    for (const element of array) {
      result.push(fn(element));
    }
    return result;
  }
  
  // Example usage with your `double` and `times100` functions:
  const numbers = [1, 2, 3, 4, 5];
  
  const doubledNumbers = myMap(numbers, double);
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
  
  const multipliedBy100 = myMap(numbers, times100);
  console.log(multipliedBy100); // Output: [100, 200, 300, 400, 500]

//   const numbers = [1, 2, 3, 4, 5];

const tripledNumbers = myMap(numbers, function (value) {
  return value * 3;
});

console.log(tripledNumbers); // Output: [3, 6, 9, 12, 15]
const tripledNumbersWithArrow = myMap(numbers, (value) => value * 3);

console.log(tripledNumbersWithArrow); // Output: [3, 6, 9, 12, 15]


  