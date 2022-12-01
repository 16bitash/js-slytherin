const arr = [1, 2, 3];

// const arr10Times = arr.map((item) => item * 10);
// console.log(arr10Times); // [10, 20, 30]

arr.map = () => console.log("I'm a map!");

// --------------------------------------

const arr10Times = Array.prototype.map.call(arr, (item) => item * 10);
console.log(arr10Times); // [10, 20, 30]
