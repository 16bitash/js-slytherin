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

console.log(bmwCar.__proto__ === Car.prototype); // true

bmwCar.printColor(); // red
audiCar.printColor(); // white

Car.printSomething(); // something

bmwCar.printColor(); // red
audiCar.printColor(); // white

function Sedan(color, brand, length) {
  Car.call(this, color, brand);
  this.length = length;
}

Sedan.prototype = Object.create(Car.prototype);
Sedan.prototype.constructor = Sedan;
