function myStoi(s) {
  let negative = false;
  let number = 0;
  let firstFound = false;
  let signFound = false;

  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  for (let eachChar of s) {
    if (!firstFound && !signFound && eachChar == "-") {
      negative = true;
      signFound = true;
    } else if (!firstFound && !signFound && eachChar == " ") {
      continue;
    } else if (!firstFound && !signFound && eachChar == "+") {
      signFound = true;
    } else if (eachChar >= "0" && eachChar <= "9") {
      number = number * 10 + Number(eachChar);

      firstFound = true;
    } else {
      break;
    }
  }

  if (negative) {
    number = -number;
  }

  if (number < INT_MIN) {
    return INT_MIN;
  }

  if (number > INT_MAX) {
    return INT_MAX;
  }

  return number;
}
console.log(myStoi("1235hg_#nm12"));
