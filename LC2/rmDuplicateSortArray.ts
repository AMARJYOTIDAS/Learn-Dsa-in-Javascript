// function removeDuplicates(nums: number[]): number {
//   let slow: number = 0;
//   let fast: number = 0;

//   while (fast < nums.length) {
//     nums[slow] = nums[fast];
//     while (nums[slow] === nums[fast]) ++fast;
//     ++slow;
//   }
//   console.log(nums);
//   return slow;
// }
// console.log(removeDuplicates([1, 1, 2])); // Output: 2
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5

//another approach
const removeDuplicates = (nums: number[]): number => {
  let k: number = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
console.log(removeDuplicates([1, 1, 2])); // Output: 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5
console.log(removeDuplicates([1, 2, 3, 4, 5])); // Output: 5
console.log(removeDuplicates([1, 1, 1, 1, 1])); // Output: 1
