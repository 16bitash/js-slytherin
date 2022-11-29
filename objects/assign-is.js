console.log(0 === -0);
console.log(Object.is(0, -0));

console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

console.log("---------------------");

const obj = { a: 1, b: 2, c: 3 };

// const obj2 = [...obj];

const obj2 = Object.assign({}, obj);

console.log(obj.a);
