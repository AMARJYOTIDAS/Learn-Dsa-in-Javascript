// OBJECT , Map

// this is object created in normal method
// let map = {};

// let map = new Object();// this was created by constructer method

// map["1"] = 10;
// map["2"] = 20;
// map["3"] = 90;

// console.log(map);
// delete map["1"];
// console.log(map);

// let map = new Map();
// // this is map similar to object ,
// //  this is created by only constructer

// map.set("1", 2);
// map.set("2", 3);
// map.set("3", 4);
// map.set("4", 5);

// console.log(map);
// console.log(map.get("5"));

function targetSum(arr, target) {
  let obj = {};
  for (let i = 0; i <= arr.length; i++) {
    let req = target - arr[i];

    if (obj[req] != undefined) {
      return [obj[req], i];
    }
    obj[arr[i]] = i;
  }
}
console.log(targetSum([1, 2, 9, 3, 4], 6));
