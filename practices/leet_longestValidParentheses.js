// https://leetcode.com/problems/longest-valid-parentheses/
// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".

var longestValidParentheses = function (s) {
  let longest = 0;
  let stack = [-1]; //짝을 기다리는 대기조

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === '(') {
      stack.push(i);
      continue;
    }
    console.log(i);
    console.log(stack);
    stack.pop(); //짝 데리고 나감
    if (!stack.length) {
      stack.push(i);
    } else longest = Math.max(i - stack[stack.length - 1], longest);
  }

  return longest;
};

console.log(longestValidParentheses('()(())'));

// function longestValidParentheses(s) {
//   let longest = 0,
//     leftCount = 0,
//     rightCount = 0;

//   //left to right pass
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '(') leftCount++;
//     else rightCount++;

//     if (leftCount === rightCount) {
//       longest = Math.max(longest, leftCount + rightCount);
//     } else if (leftCount < rightCount) {
//       leftCount = 0;
//       rightCount = 0;
//     }
//   }

//   //right to left pass
//   (leftCount = 0), (rightCount = 0);
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === '(') leftCount++;
//     else rightCount++;

//     if (leftCount === rightCount) {
//       longest = Math.max(longest, leftCount + rightCount);
//     } else if (leftCount > rightCount) {
//       leftCount = 0;
//       rightCount = 0;
//     }
//   }
//   return longest;
// }
