// Input: [1, 2, 3, 4, 5]
// Output: 15

const calculateSum = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    sum = sum + num;
  }

  return sum;
};

const arr = [1, 2, 3, 4, 5];

const result = calculateSum(arr); // 15
console.log(result);

const finalSum = arr.reduce((sum, num) => sum + num, 0);

console.log(finalSum);
