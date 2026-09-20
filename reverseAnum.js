// var reverse = function (x) {
//   // Step 1:
//   // Take absolute value of x so we don't worry about negative sign
//   // Example: x = -123 -> Math.abs(x) = 123
//   const absValue = Math.abs(x);

//   // Step 2:
//   // Convert number to string, split into characters,
//   // reverse the characters, and join them back
//   // Example: 123 -> "123" -> ["1","2","3"] -> ["3","2","1"] -> "321"
//   const absReversed = absValue.toString().split("").reverse().join("");

//   // Step 3:
//   // Check for overflow condition
//   // If reversed value is greater than 2^31, it goes out of range
//   // of signed 32-bit integer
//   if (absReversed > 2 ** 31) {
//     return 0;
//   }

//   // Step 4:
//   // Restore the original sign of x
//   // Math.sign(x) returns:
//   //  1 for positive numbers
//   // -1 for negative numbers
//   //  0 for zero
//   return absReversed * Math.sign(x);
// };
// console.log(reverse(123));
// console.log(reverse(-159));
// console.log(reverse(1460));

function reverse(x) {
  let sign = x < 0 ? -1 : 1;
  x = Math.abs(x);

  let reverse = 0;

  while (x !== 0) {
    let digit = x % 10;
    reverse = reverse * 10 + digit;
    x = Math.floor(x / 10);
  }

  reverse = reverse * sign;

  // 32-bit signed integer range
  if (reverse < -(2 ** 31) || reverse > 2 ** 31 - 1) {
    return 0;
  }

  return reverse;
}

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
