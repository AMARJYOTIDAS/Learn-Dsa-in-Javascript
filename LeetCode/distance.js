var findTheDistanceValue = function (arr1, arr2, d) {
  const isValid = (n, arr, d) => {
    for (const e of arr) {
      if (Math.abs(e - n) <= d) return false;
    }
    return true;
  };

  let c = 0;
  for (const n of arr1) {
    if (isValid(n, arr2, d)) c++;
  }
  return c;
};
console.log(findTheDistanceValue([1, 2, 3, 6], [4, 5, 6, 7], 6));
