// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeNthFromEnd = function (head, n) {
  let hare = head, // 패딩
    curr = head; //없앨 노드의 바로 앞
  while (n--) {
    hare = hare.next;
  }
  console.log(hare.val);
  while (hare && hare.next) {
    curr = curr.next;
    hare = hare.next;
    console.log(`curr:${curr.val}  hare:${hare.val}`);
  }
  console.log(`=> curr:${curr.val}  hare:${hare.val}`);
  if (!hare) {
    head = head.next;
  } else {
    curr.next = curr.next ? curr.next.next : null; //없앨 노드를 건너띔
  }
  return head;
};
const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, null)))
);
console.log(removeNthFromEnd(head, 1));

//뒤에서 두번쨰는 앞에서 두번째까지 패딩을 주고 맨 끝까지 가면 찾을 수 있다.
