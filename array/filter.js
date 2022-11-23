// Input: [1, 2, 3, 4, 5]
// Output: [3, 4, 5]

const arr = [1, 2, 3, 4, 5];

const elementsGreaterThanThree = arr.filter((num) => num > 2);

console.log(elementsGreaterThanThree); // [3, 4, 5]

const arr2 = [45, 64, 90, 12, 34, 67, 89, 23, 45, 67, 89, 90, 12, 34, 56, 78];

const oddNumbers = arr2.filter((num) => num % 2 !== 0);

console.log(oddNumbers); // [45, 67, 89, 23, 45, 67, 89]
