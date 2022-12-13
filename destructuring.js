// Arrays
const arr = [1, 2, 3];

const one = arr[0];
const two = arr[1];
const three = arr[2];

console.log(one, two, three);

// Same as above but with destructuring
const arr2 = [4, 5, 6];

const [four, five, six] = arr2;

console.log(four, five, six);

// Destructuring with rest operator
const arr3 = [7, 8, 9, 10, 11, 12, 13, 14, 15];

const [seven, eight, ...restOfTheArray] = arr3;

// Objects
const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

const name = obj.name;
const age = obj.age;
const cityName = obj.city;

console.log(name, age, cityName);

// Same as above but with destructuring
const car = {
  company: "BMW",
  model: "M3",
  year: 2018,
  color: "black",
};

const { company, model, year, color: raang } = car;

console.log(company, model, year, raang);

// Destructuring with rest operator
const obj2 = {
  firstName: "Jane",
  age: 30,
  city: "New York",
  country: "USA",
  state: "New York",
  zip: 10001,
};

const { firstName, ...rest } = obj2;

console.log(firstName, rest);
