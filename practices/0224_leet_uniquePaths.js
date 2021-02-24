// https://leetcode.com/problems/unique-paths/

// Input: m = 3, n = 7
// Output: 28

// var uniquePaths = function (m, n) {
//   let count = 0;
//   function dfs(down, right) {
//     if (down === m - 1 || right === n - 1) {
//       console.log(down, right);
//       count++;
//       return;
//     }
//     dfs(down + 1, right);
//     dfs(down, right + 1);
//   }
//   dfs(0, 0);
//   return count;
// };

const uniquePaths = (m, n) => {
  const dp = new Array(m + 1).fill(0);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1).fill(1);
  }

  dp[m][n] = 1;
  for (let row = m - 1; row > 0; row--) {
    for (let col = n - 1; col > 0; col--) {
      dp[row][col] = dp[row + 1][col] + dp[row][col + 1];
    }
  }

  return dp[1][1];
};

console.log(uniquePaths(3, 3));
