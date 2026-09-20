// function reverseSentence(sentence) {
//   let words = sentence.split(" ");
//   let result = "";

//   for (let i = words.length - 1; i >= 0; i--) {
//     result += words[i];

//     if (i !== 0) {
//       result += " ";
//     }
//   }

//   return result;
// }

// console.log(reverseSentence("I love JavaScript"));

const reverseSentence = (sentence) => {
  return sentence.split("").reverse().join("");
};
console.log(reverseSentence("i love javascript"));
