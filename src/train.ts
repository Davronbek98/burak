// Task -G

// function getHighestIndex(arr: number[]) {
//   let maxIndex = 0;
//   let maxValue = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxValue) {
//       maxValue = arr[i];
//       maxIndex = i;
//     }
//   }

//   return maxIndex;
// }

// const result = getHighestIndex([5, 21, 12, 21, 8]);
// console.log(result);

// Task -H

// function getPositive(arr: number[]): string {
//   return arr.filter((num) => num > 0).join("");
// }

// console.log(getPositive([1, -4, 2]));

// Task -2H

// function getDigits(input: string): string {
//   const digits: RegExpMatchArray | null = input.match(/\d+/g);

//   return digits ? digits.join("") : "";
// }

// const result = getDigits("m14i1t");
// console.log(result);

/* Project Standarts:
-Loging Standarts
-Naming Standarts:
  function , method, variable => CAMEL
  class => PASCAL
  folder,file => KEBAB
  css => SNAKE
- Error handling
*/

// TASK - I    I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

// function majorityElement(arr: number[]): number {
//   const countMap: { [key: number]: number } = {};

//   for (const num of arr) {
//     countMap[num] = (countMap[num] || 0) + 1;
//   }

//   let majorityElement = arr[0];
//   let maxCount = 0;

//   for (const num in countMap) {
//     if (countMap[num] > maxCount) {
//       maxCount = countMap[num];
//       majorityElement = parseInt(num);
//     }
//   }

//   return majorityElement;
// }

// const result = majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);
// console.log(result);

// Traditional FD => BSSR =>EJS
// Modern FD => SPA => REACT

// TASK -J

// function findLongestWord(sentence: string): string {
//   const words = sentence.split(" ");
//   let longestWord = "";

//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("I come from Uzbekistan"));

// TASK- K

// function countVowels(str: string): number {
//   const vowels: string = "aeiouAEIOU";
//   let count: number = 0;

//   for (const char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// const result = countVowels("string");
// console.log(result);

// TASK - L

// function reverseSentence(sentence: string): string {
//   const words = sentence.split(" ");

//   const reversedWords = words.map((word) => word.split("").reverse().join(""));

//   return reversedWords.join(" ");
// }

// const result = reverseSentence("we like coding!");
// console.log(result);

/* VALIDATION:
Frontend validation 
Backend validation
Database validation
*/

// TASK - M

// function getSquareNumbers(
//   numbers: number[]
// ): { number: number; square: number }[] {
//   return numbers.map((num) => ({
//     number: num,
//     square: num * num,
//   }));
// }

// const result = getSquareNumbers([1, 2, 3]);
// console.log(result);

// TASK - N

// function palindromeCheck(str: string): boolean {
//   const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

//   return cleanedStr === cleanedStr.split("").reverse().join("");
// }

// const result1 = palindromeCheck("dad");
// console.log(result1); // true

// const result2 = palindromeCheck("number");
// console.log(result2); // false

// TASK - O

// function calculateSumOfNumbers(arr: any[]): number {
//   return arr.reduce((sum, current) => {
//     if (typeof current === "number") {
//       return sum + current;
//     }

//     return sum;
//   }, 0);
// }

// const result = calculateSumOfNumbers([10, "10", { number: 10 }, true, 35]);
// console.log(result);

// TASK - P

// function objectToArray(obj: { [key: string]: any }): [string, any][] {
//   return Object.entries(obj);
// }
// const result = objectToArray({ a: 10, b: 20 });
// console.log(result);

// TASK- Q

// function hasProperty(obj: object, prop: string): boolean {
//   return Object.prototype.hasOwnProperty.call(obj, prop);
// }

// const result1 = hasProperty({ name: "BMW", model: "M3" }, "model");
// console.log(result1); // true
// const result2 = hasProperty({ name: "BMW", model: "M3" }, "year");
// console.log(result2); // false

// TASK - R

// function calculate(expression: string): number {
//   const numbers = expression.split("+").map(Number);

//   return numbers.reduce((a, b) => a + b, 0);
// }

// const result = calculate("1+3");
// console.log(result);

// TASK - S

// function missingNumber(nums: number[]): number {
//   const n = nums.length;

//   const expectedSum = (n * (n + 1)) / 2;

//   const actualSum = nums.reduce((acc, num) => acc + num, 0);

//   return expectedSum - actualSum;
// }

// const result = missingNumber([3, 0, 1]);
// console.log(result);

// // TASK -T

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   const mergedArray: number[] = [...arr1, ...arr2];

//   return mergedArray.sort((a, b) => a - b);
// }

// const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// console.log(result);

//TASK - U

// function sumOdds(number: number): number {
//   let count = 0;
//   for (let i = 1; i <= number; i += 2) {
//     count++;
//   }
//   return count;
// }

// console.log(sumOdds(9));
// console.log(sumOdds(11));

// TASK- V

// function countChars(str: string): Record<string, number> {
//   const result: Record<string, number> = {};

//   for (let char of str) {
//     if (result[char]) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }

//   return result;
// }

// const output = countChars("hello");
// console.log(output);
