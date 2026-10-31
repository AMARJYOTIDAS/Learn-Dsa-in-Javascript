// function findPalindrom(arr) {
//   let flag = 0;
//   for (let i = 0; i <= arr.length / 2; i++) {
//     if (arr[i] != arr[arr.length - 1 - i]) {
//       flag = 1;
//       break;
//     }
//   }
//   if (flag === 0) {
//     console.log(" this array is palindrom string");
//   } else {
//     console.log("the array is not palindrom");
//   }
// }
// findPalindrom([1, 2, 3, 2])

// const findPalindromOfNum = (str) => {
//   let original = str;
//   let reverse = 0;

//   while (str != 0) {
//     let remainder = str % 10;

//     reverse = reverse * 10 + remainder;

//     str = Math.floor(str / 10);
//   }

//   if (reverse === original) {
//     console.log("The number is palindrome");
//   } else {
//     console.log("The number is not palindrome");
//   }
// };

// findPalindromOfNum(12321);

// const findPalindromOfStr = (str) => {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] != str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// };
// console.log(findPalindromOfStr("mamdmam"));
// console.log(findPalindromOfStr("hari"));

var isPalindrome = function (x) {
  var reverse = 0;
  var copy = x;

  //The loop break when the copy of original number becomes zero
  //Also negative number cannot be a palindrome
  while (copy > 0) {
    const digit = copy % 10;
    reverse = reverse * 10 + digit;
    copy = ~~(copy / 10);
  }

  return reverse == x;
};

console.log(isPalindrome(-123));
console.log(isPalindrome(123));
console.log(isPalindrome(121));
console.log(isPalindrome("12321"));
