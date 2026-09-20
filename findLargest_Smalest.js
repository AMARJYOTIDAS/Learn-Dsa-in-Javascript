function findLargest(arr) {
  let largest = arr[0];
  let smallest = arr[0];
  let secondLargest = 0;
  for (const num of arr) {
    if (arr[num] > largest) {
      secondLargest = largest;
      largest = arr[num];
    } else if (num > secondLargest && num != largest) {
      secondLargest = num;
    }
    if (arr[num] < smallest) {
      smallest = arr[num];
    }
  }

  console.log(largest);
  console.log("the second largest no is", secondLargest);
  console.log(smallest);
}
findLargest([1, 25, 12, 4, 9]);
