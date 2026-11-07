/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
      continue;
    }
    if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
      switch (s[i]) {
        case ")":
          if (stack.pop() !== "(") {
            return false;
          }
          break;
        case "]":
          if (stack.pop() !== "[") {
            return false;
          }
          break;
        case "}":
          if (stack.pop() !== "{") {
            return false;
          }
          break;
      }
    }
  }

  console.log(stack.length);
  console.log(stack);
  if (stack.length === 0) {
    return true;
  }
  return false;
};
console.log(isValid("amar"));
console.log(isValid("[annna]"));
console.log(isValid("[annna{"));
