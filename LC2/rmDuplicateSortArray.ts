function removeDuplicates(nums: number[]): number {
  let slow: number = 0;
  let fast: number = 0;

  while (fast < nums.length) {
    nums[slow] = nums[fast];
    while (nums[slow] === nums[fast]) ++fast;
    ++slow;
  }
  console.log(nums);
  return slow;
}
console.log(removeDuplicates([1, 1, 2])); // Output: 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5
