// Objects
const obj = { a: 1, b: 2, c: 3 };

console.log(obj.__proto__ === Object.prototype);
console.log(obj.__proto__.__proto__ === null);

console.log(obj.toString());

obj.toString = () => "d";
console.log(obj.toString());

console.log("---------------------");

// Arrays
const arr = [1, 2, 3];

console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(arr.__proto__.__proto__.__proto__ === null);

console.log("---------------------");

// Functions
const func = () => {};

console.log(func.__proto__ === Function.prototype);
console.log(func.__proto__.__proto__ === Object.prototype);
console.log(func.__proto__.__proto__.__proto__ === null);