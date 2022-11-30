// Old way
function Car(color, brand) {
  this.color = color;
  this.brand = brand;
}

// Attach a method
Car.prototype.printColor = function () {
  console.log(this.color);
};

// Static method
Car.printSomething = function () {
  console.log("something");
};

const bmwCar = new Car("red", "bmw");
const audiCar = new Car("white", "audi");

bmwCar.printColor(); // red
audiCar.printColor(); // white

Car.printSomething(); // something

bmwCar.printColor(); // red
audi.printColor(); // white
