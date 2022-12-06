const logger = () => console.log("Logging");

const timeoutID = setTimeout(logger, 5000);

let counter = 0;

const logCount = () => {
  console.log(counter);
  counter++;
};

const intervalID = setInterval(logCount, 1000);

setTimeout(() => clearInterval(intervalID), 6000);
