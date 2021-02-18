// https://leetcode.com/problems/longest-palindrome/

// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

var longestPalindrome = function (s) {
  const charMap = new Map();
  let sum = 0;

  for (let c of s) {
    //string 반복문
    charMap.set(c, (charMap.get(c) || 0) + 1);
    console.log(c, charMap.get(c));
    console.log(sum);
    if (!(charMap.get(c) % 2)) sum += 2;
  }
  return s.length > sum ? ++sum : sum;
};

console.log(longestPalindrome('abccccdd'));
