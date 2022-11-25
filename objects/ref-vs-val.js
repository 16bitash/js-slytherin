// Pass by value
const a = 1;
let b = a;

b = 3;

console.log(a);
console.log(b);

// Pass by reference

// Object
const c = {
  name: "John",
};

const d = c;

d.name = "Jane";

console.log(c.name);
console.log(d.name);

// Array
const e = [1, 2, 3];
const f = e;

f.push(4);

console.log(e);
console.log(f);

// Shallow cloning
const g = { name: "Alex", age: 30 };

const keys = Object.keys(g);

const h = { ...g };

h.name = "John";

console.log(h);
console.log(g);

// Deep cloning
const i = { name: "Alex", age: 30, address: { city: "Bangalore" } };

const j = { ...i };

j.address.city = "Mumbai";

console.log(i);
console.log(j);
