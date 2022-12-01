const obj = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

function printThis(a, b) {
  console.log(this);
  console.log(a, b);
  console.log('-----------------')
}

printThis(2, 3); // this is window object

// Call
printThis.call(obj, 2, 3); // this is the object itself

// Apply
printThis.apply(obj, [2, 3]); // this is the object itself

// Bind
const boundedFunc = printThis.bind(obj);
boundedFunc(2, 3); // this is the object itself
