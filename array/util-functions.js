const arr = [1, 2, 3];

arr.push(4);

console.log(arr); // [1, 2, 3, 4]

const poppedElement = arr.pop();
console.log(poppedElement); // 4

console.log(arr); // [1, 2, 3]

const shiftedElement = arr.shift();
console.log(shiftedElement); // 1
console.log(arr); // [2, 3]

arr.unshift(1);
console.log(arr); // [1, 2, 3]

console.log(arr.toString()); // "1,2,3"

console.log(arr.join("-")); // "1 2 3"

const arr2 = [12, 10, 6, 5, 4];

// arr2.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     }

//     if (a < b) {
//         return -1;
//     }

//     return 0;
// });

arr2.sort((a, b) => a - b);
console.log(arr2);

const arr3 = [1, 2, 3, 4, 5];

arr3.reverse();
console.log(arr3);

const arr4 = [1, 2, 3, 4, 5];
const arr5 = arr4.slice(0, 3); // [1, 2, 3]
console.log(arr5);

const arr6 = [1, 2, 3, 4, 5];
arr6.splice(3, 2);
console.log(arr6);

const arr7 = [1, 2, 3, 4, 5];
const arr8 = [6, 7, 8, 9, 10];
const arr9 = arr7.concat(arr8);
console.log(arr9);

const arr10 = [1, 2, 3, 4, 5];
const doesNumber5Exist = arr10.includes(5);
const doesNumber10Exist = arr10.includes(10);
console.log(doesNumber5Exist);
console.log(doesNumber10Exist);

const arr11 = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Grapes",
  "Mango",
];

const firstIndex = arr11.indexOf("Mango");
console.log(firstIndex);

const lastIndex = arr11.lastIndexOf("Mango");
console.log(lastIndex);
