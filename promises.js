const wait = (ms) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve("done");
      resolve();
    //   reject("Internet issue");
    //   reject();
    }, ms);
  });

  return promise;
};

// setTimeout(() => {
//   console.log("Hello");

//   setTimeout(() => {
//     console.log("World");

//     setTimeout(() => {
//       console.log("Goodbye");

//       setTimeout(() => {
//         console.log("Hi again");
//       }, 1000);
//     }, 3000);
//   }, 1000);
// }, 2000);

// wait(2000)
//   .then(() => {
//     console.log("Hello");

//     return wait(1000);
//   })
//   .then(() => {
//     console.log("World");

//     return wait(3000);
//   })
//   .then(() => {
//     console.log("Goodbye");

//     return wait(1000);
//   })
//   .then(() => {
//     console.log("Hi again");
//   })
//   .catch(() => {
//     console.log("Error");
//   });

const run = async () => {
  try {
    await wait(2000);
    console.log("Hello");

    await wait(1000);
    console.log("World");

    await wait(3000);
    console.log("Goodbye");

    await wait(1000);
    console.log("Hi again");
  } catch {
    console.log("Error");
  }
};

run();
