// https://leetcode.com/problems/merge-intervals/
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// var merge = function (intervals) {
//   let mark = 0;
//   let out = [];
//   let buffer = [0, 0];
//   while (mark !== intervals.length) {
//     console.log(mark, buffer[1], intervals[mark][0]);
//     if (buffer[1] < intervals[mark][0]) {
//       buffer = intervals[mark];
//       out.push(buffer);
//       mark++;
//       continue;
//     }
//     if (buffer[1] >= intervals[mark][0]) {
//       buffer[1] = intervals[mark][1];
//       mark++;
//       continue;
//     }
//   }

//   return out;
// };

var merge = function (intervals) {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let [start, end] of intervals) {
    if (start <= result[result.length - 1][1]) {
      const [startPrev, endPrev] = result.pop();
      result.push([startPrev, Math.max(end, endPrev)]);
    } else result.push([start, end]);
  }
  return result;
};

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);
