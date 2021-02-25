// https://leetcode.com/problems/regular-expression-matching/

var isMatch = function (s, p) {
  const memo = new Map();

  function recurse(sIdx, pIdx) {
    console.log({ sIdx, pIdx });
    if (memo.has(`${sIdx}-${pIdx}`)) {
      console.log(`===========`);
      return memo.get(`${sIdx}-${pIdx}`);
    }
    if (sIdx === s.length && pIdx === p.length) return true;
    if (sIdx > s.length) return false;

    let result = null;

    if (p[pIdx] === s[sIdx] || p[pIdx] === '.') {
      if (p[pIdx + 1] === '*')
        result = recurse(sIdx, pIdx + 2) || recurse(sIdx + 1, pIdx);
      else result = recurse(sIdx + 1, pIdx + 1);
    } else {
      if (p[pIdx + 1] === '*') result = recurse(sIdx, pIdx + 2);
      else result = false;
    }
    console.log(`${sIdx}-${pIdx}`, result);
    memo.set(`${sIdx}-${pIdx}`, result);
    return result;
  }
  return recurse(0, 0);
};

// var isMatch = function (s, p) {
//   const dp = Array.from({ length: s.length + 1 }, () => [false]);
//   dp[0][0] = true;

//   // fill first row
//   for (let i = 1; i <= p.length; i++) {
//     if (p[i - 1] === '*') dp[0][i] = dp[0][i - 2];
//     else dp[0][i] = false;
//   }

//   for (let r = 1; r <= s.length; r++) {
//     for (let c = 1; c <= p.length; c++) {
//       if (p[c - 1] === '*') {
//         if (p[c - 2] === s[r - 1] || p[c - 2] === '.') {
//           dp[r][c] = dp[r][c - 2] || dp[r - 1][c];
//         } else dp[r][c] = dp[r][c - 2];
//       } else if (p[c - 1] === s[r - 1] || p[c - 1] === '.') {
//         dp[r][c] = dp[r - 1][c - 1];
//       } else dp[r][c] = false;
//       console.log(c, p[c - 1], s[r - 1], dp[r][c]);
//       console.log(dp);
//     }
//   }
//   return dp[s.length][p.length];
// };

// var isMatch = function(str, pattern) {
//     return Boolean(str.match(new RegExp(`^${pattern}$`)));
// };

console.log(isMatch('aab', 'a*b'));

//패스, 쥰내어렵네^^ㅣ발
