let n = 5;

for (let i = 1; i <= n; i++) {
  let row = " ".repeat(n - i);

  for (let j = 1; j <= 2 * i - 1; j++) {
    row += j === 1 || j === 2 * i - 1 ? "*" : " ";
  }

  console.log(row);
}

for (let i = n - 1; i >= 1; i--) {
  let row = " ".repeat(n - i);

  for (let j = 1; j <= 2 * i - 1; j++) {
    row += j === 1 || j === 2 * i - 1 ? "*" : " ";
  }

  console.log(row);
}
