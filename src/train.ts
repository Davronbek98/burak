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
  folder => KEBAB
  css => SNAKE
- Error handling
*/
