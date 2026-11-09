class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Convert array to linked list
function createList(arr) {
  let dummy = new ListNode(-1);
  let current = dummy;

  for (let value of arr) {
    current.next = new ListNode(value);
    current = current.next;
  }

  return dummy.next;
}

// Convert linked list to array
function printList(head) {
  let result = [];

  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }

  console.log(result);
}

// Remove Nth Node From End
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
};

// Test case
let head = createList([1, 2, 3, 4, 5]);
let n = 2;

console.log("Before deletion:");
printList(head);

head = removeNthFromEnd(head, n);

console.log("After deletion:");
printList(head);
