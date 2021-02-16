// function lengthOfLongestSubstring(s) {
//   let start = 0;
//   let max = s.length == 0 ? 0 : 1;
//   for (let i = 1; i < s.length + 1; i++) {
//     let sub = s.substring(start, i);
//     let isDup = sub.split('').some((v, i, a) => a.lastIndexOf(v) != i);
//     if (isDup) {
//       start++;
//       i = start + 1;
//     } else if (max < sub.length) {
//       max = sub.length;
//     }
//   }
//   console.log(max);
// }

const lengthOfLongestSubstring = (s) => {
  // keeps track of the most recent index of each letter.
  const map = {};
  // keeps track of the starting index of the current substring.
  var left = 0;

  return s.split('').reduce((max, v, i) => {
    // starting index of substring is 1 + (the last index of this letter) to ensure this letter is not counted twice.
    left = map[v] >= left ? map[v] + 1 : left;
    // updates last recorded index of letter to the most recent index.
    map[v] = i;

    // indices of current substring is (idx - leftIdx, idx).
    // +1 because if your substring starts and ends at index 0, it still has a length of 1.
    return Math.max(max, i - left + 1);
  }, 0);
};

lengthOfLongestSubstring('aad');
