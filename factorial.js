// function findFactorial() {
//   let num = 5;
//   let factorial = 0;
//   for (let i = 0; i <= 5; i++) {
//     factorial += num * (num - 1);
//   }
//   console.log(factorial);
// }
// findFactorial();

function findFactorial(n) {
  if (n == 0 || n <= 1) {
    return 1;
  }
  return n * findFactorial(n - 1);
}
console.log(findFactorial(5));
