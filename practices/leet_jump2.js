// var jump2 = function (nums) {
//   let min = 10000;
//   function find(start, count) {
//     if (start >= nums.length - 1) {
//       if (min > count) {
//         min = count;
//       }
//       return;
//     }
//     for (let j = 1; j < nums[start] + 1; j++) {
//       find(start + j, count + 1);
//     }
//   }
//   find(0, 0);
//   return min;
// };

var jump2 = function (nums) {
  let newMax = 0;
  let jump = 0;
  let oldMax = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    newMax = Math.max(newMax, i + nums[i]);
    if (i == oldMax) {
      jump++;
      oldMax = newMax;
    }
  }
  return jump;
};

console.log(jump2([5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2]));

//경우의수 문제가 아니라면 dfs 지양,
// 최소한의 점프를 한다? => 한번 점프할 때 많이 점프해야 한다!
