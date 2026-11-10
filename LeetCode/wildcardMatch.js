// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "*"
// Output: true
// Explanation: '*' matches any sequence.
// Example 3:

// Input: s = "cb", p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

// Constraints:

// 0 <= s.length, p.length <= 2000
// s contains only lowercase English letters.
// p contains only lowercase English letters, '?' or '*'.

const isMatch = function (string, pattern) {
  let s = 0,
    p = 0;
  let starIdx = -1,
    pointer = -1;

  while (s < string.length) {
    if (
      (p < pattern.length && string[s] === pattern[p]) ||
      pattern[p] === "?"
    ) {
      s++;
      p++;
    } else if (p < pattern.length && pattern[p] === "*") {
      starIdx = p;
      pointer = s;
      p++;
    } else if (starIdx === -1) return false;
    else {
      p = starIdx + 1;
      s = pointer + 1;
      pointer = s;
    }
  }
  for (let idx = p; idx < pattern.length; idx++) {
    if (pattern[idx] !== "*") return false;
  }

  return true;
};

console.log(isMatch("abcc", "abc"));
console.log(isMatch("abcc", "?c"));
console.log(isMatch("abcc", "a*c"));
console.log(isMatch("abcc", "a*"));
console.log(isMatch("abcc", "c*"));
console.log(isMatch("abcc", "*c"));
