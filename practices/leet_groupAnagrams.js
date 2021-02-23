// https://leetcode.com/problems/group-anagrams/
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// var groupAnagrams = function(strs) {
//     let res = [];
//     let map = {};
//     let sorted;
//     strs.forEach((item,i)=>{
//         sorted = item.split('').sort().join('');
//         console.log(sorted)
//         if(map[sorted]===undefined){
//             res.push([item]);
//             map[sorted] = res.length-1;
//         }else{
//             res[map[sorted]].push(item);
//         }
//     })
//     return res;
// };

var groupAnagrams = function (strs) {
  const map = {};
  const primes = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
  ];
  strs.forEach((str) => {
    let prod = str
      .split('')
      .reduce((r, c) => r * primes[c.charCodeAt() - 97], 1);
    map[prod] ? map[prod].push(str) : (map[prod] = [str]);
  });
  return Object.values(map);
};
