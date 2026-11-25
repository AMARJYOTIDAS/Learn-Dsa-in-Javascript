var sortColors = function (nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      // Move 0 to the beginning
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // 1 is already in the correct region
      mid++;
    } else {
      // Move 2 to the end
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }

  return nums;
};
console.log(sortColors([1, 1, 0, 0, 3, 2]));
console.log(sortColors([0, 0, 8, 5]));
