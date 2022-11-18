// Block
if (true) {
  console.log("Hello");
  console.log("World");

  {
    console.log("I am inside a bracket inside for loop");
  }
}

{
  console.log("I am inside the bracket");
}

// Functional Scope

function logNumber() {
  {
    var number = 10;
  }

  console.log(number);
}

logNumber();

// Block Scope

function logNum() {
  let number = 10;

  {
    console.log(number);
  }
}

logNum();

// Temporal Dead Zone

function log() {
  //   console.log(num);
  //   let num = 3;
}

log();

// Const

const num = 10;

num = 20;

const num;

console.log(num);
