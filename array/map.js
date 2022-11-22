// Input- [1, 2, 3, 4, 5]
// Output- [2, 4, 6, 8, 10]

// const doubleElementsInArray = (arr) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i] * 2;
//   }

//   return result;
// };

// const double = (num) => {
//   return num * 2;
// };

const doubleElementsInArray = (arr) => {
  const result = arr.map((num) => num * 2);
  return result;
};

const result = doubleElementsInArray([1, 2, 3, 4, 5]);
console.log(result);

// Input: [{ name: "John", age: 25 }, { name: "Jane", age: 30 }, { name: "Jim", age: 35 }]
// Output: ["John", "Jane", "Jim"]

const mapNames = (arr) => {
  const result = arr.map((obj) => obj.name);
  return result;
};

const names = mapNames([
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jim", age: 35 },
]);
console.log(names);
