// let str = "programming";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//   let count = 0;

//   for (let j = 0; j < i; j++) {
//     if (str[i] === str[j]) {
//       count++;
//     }
//   }

//   if (count > 0) {
//     result += "x";
//   } else {
//     result += str[i];
//   }
// }

// console.log(result);

// function findFrequency(str) {
//   let map = new Map();
//   let result = "";

//   for (let char of str) {
//     if (map.has(char)) {
//       result += "x";
//     } else {
//       map.set(char, 1);
//       result += char;
//     }
//   }

//   console.log(result);
// }
// findFrequency("helloworld");

// let arr = [4, 2, 7, 4, 9, 2, 5, 7];
// let result = "";
// let map = new Map();

// for (let num of arr) {
//   if (map.has(num)) {
//     console.log("Duplicate:", num);
//     result += "x";
//   } else {
//     map.set(num, 1);
//     result += num;
//   }
//   console.log(result);
// }

let arr = [4, 2, 7, 4, 9, 2, 5, 7];

arr.sort((a, b) => a - b);

let left = 0;
let right = 1;

while (right < arr.length) {
  if (arr[left] === arr[right]) {
    console.log("Duplicate:", arr[right]);

    // Move right past this duplicate
    right++;
  } else {
    left = right;
    right++;
  }
}
