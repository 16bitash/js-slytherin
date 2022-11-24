function add(...args) {
  return args.reduce((sum, num) => sum + num, 0);
}

const result = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);
