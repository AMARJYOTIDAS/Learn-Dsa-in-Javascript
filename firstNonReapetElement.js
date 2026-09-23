function firstNonRepeating(str) {
  const map = new Map();

  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of str) {
    if (map.get(char) === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeating("aabbcde"));
