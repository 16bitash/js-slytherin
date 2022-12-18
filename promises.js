const wait = (ms) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

  return promise;
};

setTimeout(() => {
  console.log("Hello");

  setTimeout(() => {
    console.log("World");

    setTimeout(() => {
      console.log("Goodbye");

      setTimeout(() => {
        console.log("Hi again");
      }, 1000);
    }, 3000);
  }, 1000);
}, 2000);
