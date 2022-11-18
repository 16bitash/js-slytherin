var n = 2;

function square(num) {
  var result = num * num;
  return result;
}

var square2 = square(n);
var square3 = square(3);

function a() {
  console.log("a");
}

function b() {
  console.log("b");
  a();
}

function c() {
  console.log("c");
  b();
}

c();

console.log(n);

var n = 2;

console.log(n);

console.log(a);

function a() {
  console.log("a");
};
