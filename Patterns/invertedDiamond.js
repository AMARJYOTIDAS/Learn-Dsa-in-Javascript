function invertedDiamond(num) {
  for (let i = num; i >= 1; i--) {
    let row = "";
    for (let j = 0; j <= num - i; j++) {
      row = "";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      row = "*";
    }
    console.log(row);
  }
}
console.log(invertedDiamond(6));
