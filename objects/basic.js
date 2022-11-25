const yearJohnsCarWasMade = 2021;
const fuelType = "Petrol";

const johnsCar = {
  company: "Mahindra",
  color: "blue",
  modal: "XUV700",
  price: 2500000,

  // When the key and value are same, we can use the shorthand
  fuelType,
  year: yearJohnsCarWasMade,
  accessories: ["seat cover", "car mat", "car perfume"],
  start: () => console.log("Car started"),

  // Another way to define a method
  stop() {
    console.log("Car stopped");
  },
  wheel: {
    diameter: 15,
    spokes: 5,
    type: "alloy",
  },
};

console.log(johnsCar);

console.log(johnsCar.company);
console.log(johnsCar.year);
console.log(johnsCar.fuelType);

console.log(johnsCar.accessories);
console.log(johnsCar.accessories[0]);

johnsCar.start();
johnsCar.stop();

console.log(johnsCar.wheel.diameter);

johnsCar.weight = "1500 KG";

console.log(johnsCar.weight);
console.log(johnsCar);

// Access key if we don't know the key name
const companyKey = "company";
console.log(johnsCar[companyKey]);

const keysOfJohnsCar = Object.keys(johnsCar);
console.log(keysOfJohnsCar);

keysOfJohnsCar.forEach((key) => console.log(`${key}: ${johnsCar[key]}`));

// Template literals (${} is evaluated as JS expression)
const templateLiteral = `John's car is ${johnsCar.company} ${johnsCar.modal} and it is ${johnsCar.color}`;
console.log(templateLiteral);

johnsCar.color = "red";
console.log(johnsCar.color);

delete johnsCar.color;
console.log(johnsCar.color);

// Access key that doesn't exist
console.log(johnsCar.engine);
