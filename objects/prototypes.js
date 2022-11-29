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
Function.prototype.sayHello = () => "Hello";

const func = () => {};
const func2 = function () {};
function func3() {}

console.log(func.__proto__ === Function.prototype);
console.log(func.__proto__.__proto__ === Object.prototype);
console.log(func.__proto__.__proto__.__proto__ === null);

console.log(func.sayHello());
console.log(func2.sayHello());
console.log(func3.sayHello());
console.log(func);

console.log("---------------------");

// Linking
const obj2 = { d: 4, e: 5, f: 6 };

// This works but is not recommended
// obj2.__proto__ = obj;

const obj3 = Object.create(obj2, {
  g: { value: 7 },
  h: { value: 8 },
  i: { value: 9 },
});

console.log(obj3.d);
