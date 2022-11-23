const arr = [1, 2, 3];

arr.push(4);

console.log(arr); // [1, 2, 3, 4]

const popedElement = arr.pop();
console.log(popedElement); // 4

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
