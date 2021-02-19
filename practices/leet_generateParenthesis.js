// https://leetcode.com/problems/generate-parentheses/
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
var generateParenthesis = function (n) {
  let res = [];
  const dfs = (str, n) => {
    if (n == 0) {
      res.push(str);
      return;
    }
    dfs(str + '(', n - 1);
    dfs(str + ')', n - 1);
  };
  dfs('', 2 * n); //2배의 경우의수
  // validate the combinations in the res array

  // ... some code to validate them, remove those that are invalid.
  // the solution to https://leetcode.com/problems/valid-parentheses/

  // res contains valid combinations now
  return res;
};
