// https://leetcode.com/problems/longest-palindromic-substring/
// https://miro.medium.com/max/1682/1*DlF5-M3twGqmx0EIisrhbA.jpeg

// var longestPalindrome = function (s) {
//   if (s.length <= 1) return s;

//   const dp = [...new Array(s.length + 1)].map((_) =>
//     new Array(s.length + 1).fill(false)
//   );

//   let lps = '';

//   for (let i = 0; i < s.length; i++) {
//     dp[i][i] = true;
//     lps = s[i];
//   }

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === s[i + 1]) dp[i][i + 1] = true;
//     if (dp[i][i + 1]) lps = s.substring(i, i + 2);
//   }

//   for (let i = s.length - 1; i >= 0; i--) {
//     for (let j = i + 2; j < s.length; j++) {
//       dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
//       if (dp[i][j]) lps = lps.length < j - i + 1 ? s.substring(i, j + 1) : lps;
//     }
//   }

//   return lps;
// };

var longestPalindrome = function (s) {
  const n = s.length;
  const dp = [];
  let longest = '';

  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(false);
  }

  for (let len = 1; len <= n; len++) {
    for (let row = 0; row < n - len + 1; row++) {
      const col = row + len - 1;
      if (s.charAt(row) == s.charAt(col)) {
        if (len <= 2 || dp[row + 1][col - 1] == true) {
          dp[row][col] = true;
          const substr = s.substring(row, col + 1);
          if (substr.length > longest.length) longest = substr;
        }
      }
    }
  }

  return longest;
};

console.log(longestPalindrome('babad'));
