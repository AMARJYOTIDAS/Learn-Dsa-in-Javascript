class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Convert array into linked list
function createList(arr) {
  let dummy = new ListNode(-1);
  let current = dummy;

  for (let value of arr) {
    current.next = new ListNode(value);
    current = current.next;
  }

  return dummy.next;
}

// Convert linked list into array
function toArray(head) {
  let result = [];

  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }

  return result;
}

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(-1);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  current.next = list1 !== null ? list1 : list2;

  return dummy.next;
};

// Testing
let list1 = createList([1, 2, 3, 4]);
let list2 = createList([4, 5, 6, 7]);

console.log(toArray(mergeTwoLists(list1, list2)));
