// https://leetcode.com/problems/product-of-array-except-self/
// Input:  [1,2,3,4]
// Output: [24,12,8,6]

var productExceptSelf = function (nums) {
  let answer = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    answer[i] = nums[i - 1] * answer[i - 1];
  }

  let right = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = answer[i] * right;
    right *= nums[i];
  }

  return answer;
};
