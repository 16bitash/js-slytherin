// Hoisting Works
sayHello();

function sayHello() {
  console.log("Hello");
}

// Hoisting does not work
const sayGoodbye = function () {
  console.log("Goodbye");
};

sayGoodbye();

// Parameters
const add = function (num1, num2) {
  return num1 + num2;
};

add(1, 2); // 3

// Function as a variable
const logSomething = function () {
  console.log("Something");
};

const executer = function (fun) {
  fun();
};

executer(logSomething);

// ----------------------------------------------

const returnSomething = function () {
  return logSomething;
};

const returnValue = returnSomething();

returnValue();

// ----------------------------------------------
function adder(num1) {
    const funToReturn = function (num2) {
        console.log(num1 + num2);
    }

    return funToReturn;
};

const add2 = adder(2);
const add3 = adder(3);

add2(5); // 7
add2(10); // 12
add3(5); // 8
