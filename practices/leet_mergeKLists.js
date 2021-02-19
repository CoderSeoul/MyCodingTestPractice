// https://leetcode.com/problems/merge-k-sorted-lists/
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]

var mergeKLists = function (lists) {
  let i = 0;

  let result = null;

  lists.forEach((v) => {
    result = mergeList(result, v);
  });

  return result;
};

var mergeList = (l1, l2) => {
  //
  if (l1 == null) return l2;

  if (l2 == null) return l1;

  if (l1.val < l2.val) {
    //한쪽이 크다면 다른 리스트에서 더 큰것이 나올때까지
    l1.next = mergeList(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeList(l1, l2.next);
    return l2;
  }
};
