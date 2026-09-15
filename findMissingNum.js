const nums = [1, 5, 3, 2];
const findMissingNum = (num) => {
  let n = nums.length;
  let actualSum = (n * (n - 1)) / 2;
  let sum = 0;

  for (let num of nums) {
    sum = +num;
  }
  return actualSum - sum;
};

console.log(findMissingNum(nums));
