const obj = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  printThis: function () {
    console.log(this);
  },
};

obj.printThis(); // This is the object itself

const func = obj.printThis;

func(); // this is window object

const johnsCar = {
  company: "Mahindra",
  color: "blue",
  modal: "XUV700",
  price: 2500000,

  wheel: {
    diameter: 15,
    spokes: 5,
    type: "alloy",

    printThis: function () {
      console.log(this);
    },
  },
};

johnsCar.wheel.printThis; // this is the wheel object

const fun = johnsCar.wheel.printThis();
fun(); // this is window object