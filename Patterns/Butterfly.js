let n = 5;

for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i) + " ".repeat(2 * (n - i)) + "*".repeat(i));
}

for (let i = n; i >= 1; i--) {
  console.log("*".repeat(i) + " ".repeat(2 * (n - i)) + "*".repeat(i));
}
