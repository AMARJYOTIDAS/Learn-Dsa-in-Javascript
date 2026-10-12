Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};

// //it will writen the last element of an array
// Array.prototype.last = function (arr) {
//   return this.length ? this[this.length - 1] : -1;
// };
// // arrayLast([1, {}, 5, 3]);
