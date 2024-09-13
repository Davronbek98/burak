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

function majorityElement(arr: number[]): number {
  const countMap: { [key: number]: number } = {};

  for (const num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  let majorityElement = arr[0];
  let maxCount = 0;

  for (const num in countMap) {
    if (countMap[num] > maxCount) {
      maxCount = countMap[num];
      majorityElement = parseInt(num);
    }
  }

  return majorityElement;
}

const result = majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);
console.log(result);
