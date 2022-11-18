// var n = 2;
// let n = 2;
// const n = 2;

// console.log(n);

// Primitive Types
// String
// Number
// Boolean
// Null
// Undefined
// Symbol
// BigInt

// Dynamic Typing
// Objects
// Arrays
// Functions

// String
var str = "Hello World";

console.log(typeof str);

// Number
var num = 10;

console.log(typeof num);

// Boolean
var bool = false;

console.log(typeof bool);

// Null
var n = null;

console.log(typeof n);

// Undefined
var u = undefined;

console.log(typeof u);

// Object
var obj = {
  name: "John",
  age: 30,
};

console.log(obj.name);
console.log(obj.age);
console.log(obj);

// Arrays
var arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  "Hello World",
  true,
  false,
  null,
  undefined,
  obj,
  add,
];

console.log(arr[3]);
console.log(arr);
console.log(Array.isArray(arr));

// Functions
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Number parsing
var str = "10";

console.log(parseInt(str));

var str = "10.5234234";

console.log(parseFloat(str));

// Type coercion

var a = 10;

var aAsString = Boolean(a);

console.log(aAsString);

var num = 10;
num = num + "";

console.log(typeof num);

// Ternary operator

1 === 2 ? console.log("Hi") : console.log("Bye");

if (1 === 2) {
  console.log("Hi");
} else {
  console.log("Bye");
}

var age = true ? 30 : 40;

console.log(age);

// Switch
var day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}

// Loops
// For
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// While
var i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// Do While
var i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);

// Iterating over arrays
var arr = ["Apple", "Orange", "Banana", "Grapes", "Mango"];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// For In
for (var i in arr) {
  console.log(arr[i]);
}

// For Of
for (var i of arr) {
  console.log(i);
}

// Continue
for (var i = 0; i < arr.length; i++) {
  if (i === 2) {
    continue;
  }

  console.log(arr[i]);
}

// Break
for (var i = 0; i < arr.length; i++) {
  if (i === 2) {
    break;
  }

  console.log(arr[i]);
}
