function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Honda", "Civic", 2019);

// Executing a function with the new keyword in front of it does the following things:
// 1. A brand new object is created (aka, constructed) out of thin air.
// 2. The newly constructed object is [[Prototype]]-linked.
// 3. The newly constructed object is set as the this binding for that function call.
// 4. Unless the function returns its own alternate object, the new-invoked function call will automatically return the newly constructed object.

// Precedence of this binding
// 1. Is the function called with new (new binding)? If so, this is the newly constructed object.
// 2. Is the function called with call or apply (explicit binding), even hidden inside a bind hard binding? If so, this is the explicitly specified object.
// 3. Is the function called with a context (implicit binding), otherwise known as an owning or containing object? If so, this is that context object.
// 4. Otherwise, default the this (default binding). If in strict mode, pick undefined, otherwise pick the global object.
