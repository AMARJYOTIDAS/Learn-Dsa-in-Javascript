let n = 5;

for (let i = 0; i < n; i++) {
  let value = 1;
  let row = " ".repeat(n - i);

  for (let j = 0; j <= i; j++) {
    row += value + " ";
    value = (value * (i - j)) / (j + 1);
  }

  console.log(row);
}
