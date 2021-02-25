// https://leetcode.com/problems/edit-distance/

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

var minDistance = function (word1, word2) {
  const R_NUM = word1.length,
    C_NUM = word2.length;
  const dp = [...Array(R_NUM + 1)].map((_, i) => [i]);
  dp[0] = [...Array(C_NUM + 1)].map((_, i) => i);

  for (let r = 1; r <= R_NUM; r++) {
    for (let c = 1; c <= C_NUM; c++) {
      if (word1[r - 1] === word2[c - 1]) dp[r][c] = dp[r - 1][c - 1];
      else
        dp[r][c] = Math.min(dp[r - 1][c], dp[r][c - 1], dp[r - 1][c - 1]) + 1;
    }
  }
  return dp[R_NUM][C_NUM];
};

minDistance('intention', 'execution');
// 편집거리알고리즘
// https://madplay.github.io/post/levenshtein-distance-edit-distance
// https://velog.io/@embeddedjune/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%9D%B4%EA%B2%83%EC%9D%B4-%EC%BD%94%EB%94%A9-%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%8B%A4-DP-Q36-%ED%8E%B8%EC%A7%91-%EA%B1%B0%EB%A6%AC
