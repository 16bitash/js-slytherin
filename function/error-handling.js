function printSpeed(speed) {
  if (speed === undefined) {
    throw new Error("Speed is required");
  }

  if (speed < 0) {
    throw new Error("Speed cannot be negative");
  }

  console.log(speed);
}

// printSpeed(); // Error: Speed is required
// printSpeed(100); // 100
// printSpeed(-10); // Error: Speed cannot be negative

function something() {
  try {
    printSpeed(-1);
  } catch (error) {
    console.log(error.message);
  }
}

something();
console.log("Hey");
