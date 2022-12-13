function x() {
  var a = 10;

  function y() {
    var b = 20;

    console.log(a, b);
  }

  a = 100;
  return y;
}

const returnedfunction = x();
returnedfunction();
