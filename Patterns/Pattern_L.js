// let n = 5;

// for (let i = 1; i <= n; i++) {
//   if (i === n) {
//     console.log("*".repeat(n));
//   } else {
//     console.log("*");
//   }
// }

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let pattern = "";

//   if (i === n) {
//     for (let j = 1; j <= n; j++) {
//       pattern += "* ";
//     }
//   } else {
//     pattern = "*";
//   }

//   console.log(pattern);
// }
let num = 5;
for (let i = 1; i <= num; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    if ((j = 1 || i == 5)) {
      row = "*";
    } else {
      row = "";
      console.log(row);
    }
    console.log(row);
  }
}
