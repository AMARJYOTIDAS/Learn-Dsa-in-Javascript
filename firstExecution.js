// console.log("1");
// function setTimeoutt() {
//   setTimeout((err, res) => {
//     if (err) {
//       console.log("err", err);
//     } else {
//       console.log("2");
//     }
//   }, 2000);
// }

// async function Async() {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("4");
//       resolve();
//     }, 1000);
//   });
// }

// setTimeoutt();
// Async();
// console.log("3");
console.log("1");

queueMicrotask(() => {
  console.log("9");
});
setTimeout(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("4");

  setTimeout(() => {
    console.log("5");
  }, 0);
});

async function test() {
  console.log("6");

  await Promise.resolve();

  console.log("7");
}

test();

console.log("8");
