function twoSum(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(arr[i], i);
  }
  return [];
}
let arr = [1, 5, 33, 4, 8, 2];
let target = 9;
console.log(twoSum(arr, target));
