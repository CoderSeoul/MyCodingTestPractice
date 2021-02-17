// var twoSum = function (nums, target) {
//     let map = {};
//     let key, sum;
//     for (let i = 0; i < nums.length; i++) {
//       key = target - nums[i];
//       if (map[nums[i]] !== undefined) {
//         return [map[nums[i]], i];
//       }
//       map[key] = i;
//     }
// };

const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    if (another in map) {
      return [map[another], i];
    }

    map[nums[i]] = i;
  }

  return null;
};

twoSum([-3, 4, 3, 90], 0);
