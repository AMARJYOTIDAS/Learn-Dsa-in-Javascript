

// In hashmap method it works in both sorted or unsorted data...
// HASHMAP

// let map = new Map();

// function twoSum(arr, target) {
//   let map = {};
//   for (let i = 0; i < arr.length; i++) {
//     let comp = target - arr[i];

//     if (map[comp] != undefined) {
//       return [map[comp], i];
//     }
//     map[arr[i]] = i;
//   }
//   return [];
// }
// console.log(twoSum([1, 4, 5, 9, 1, 12], 13));

function twoSum(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let comp = target - arr[i];

    if (map.has(comp)) {
      return [map.get(comp), i];
    }
    map.set(arr[i], i);
  }
  return [];
}
let arr = [1, 5, 33, 4, 8, 2];
let target = 9;
console.log(twoSum(arr, target));

// in twopointer approach is the right method but in only sorted Array
// function twoSum(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let sum = arr[left] + arr[right];

//     if (sum == target) {
//       return [left, right];
//     }

//     if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return [];
// }

// console.log(twoSum([1, 3, 5, 7, 11], 10));
