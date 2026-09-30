// function lengthOfLongestSubstring(s) {
//     let map = new Map();
//     let left = 0;
//     let maxLength = 0;

//     for (let right = 0; right < s.length; right++) {
//         let char = s[right];

//         // If character already exists in current window
//         if (map.has(char) && map.get(char) >= left) {
//             left = map.get(char) + 1;
//         }

//         map.set(char, right);

//         maxLength = Math.max(maxLength, right - left + 1);
//     }

//     return maxLength;
// }

// console.log(lengthOfLongestSubstring("abcabcbb"));
function longestSubstring(s) {
  let left = 0;
  let maxLength = 0;
  let set = new Set();

  for (let right = 0; right < s.length; right++) {
    // If duplicate found, move left
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    // Add current character
    set.add(s[right]);

    // Calculate window length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(longestSubstring("abcabcbb")); // 3
console.log(longestSubstring("bbbbb")); // 1
console.log(longestSubstring("pwwkew")); // 3
