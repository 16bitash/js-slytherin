const arr = [];

// To check if a variable is an array
console.log(Array.isArray(arr));

const arr2 = [
  1,
  2,
  3,
  4,
  5,
  "asd",
  { name: "John" },
  [1, 2, 3],
  () => console.log("something"),
];

console.log(arr2[3]);
console.log(arr2[5]);
console.log(arr2[6].name);
console.log(arr2[7][1]);
console.log(arr2[8]());
