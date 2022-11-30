class Animal {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  speak() {
    console.log(`${this.name} says hello!`);
  }

  static printSomething() {
    console.log("something");
  }
}

const dog = new Animal("dog", 2, "black");
const cat = new Animal("cat", 3, "white");

console.log(dog.color); // black
console.log(cat.color); // white

dog.speak(); // dog says hello!
cat.speak(); // cat says hello!

Animal.printSomething(); // something

class Cow extends Animal {
  constructor(name, age, color, milkCapacity) {
    super(name, age, color);
    this.milkCapacity = milkCapacity;
  }

  get milkCapacity() {
    console.log("Getter is invoked");
    return this._milkCapacity;
  }

  set milkCapacity(milkCapacity) {
    if (milkCapacity < 0) {
      throw new Error("Milk capacity cannot be negative");
    }

    this._milkCapacity = milkCapacity;
  }

  // Method overriding
  speak() {
    console.log("Moo");
  }
}

const cow = new Cow("cow", 5, "brown", 10);

cow.speak();

console.log(cow.milkCapacity); // 10
