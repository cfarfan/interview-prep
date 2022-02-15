/**
 * URL: https://leetcode.com/problems/3sum/
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * 
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * 
 * Example 2:
 * Input: nums = []
 * Output: []
 * 
 * Example 3:
 * Input: nums = [0]
 * Output: []
 * 
 * Constraints:
 * 0 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) { return []; }

  // default array sort transforms elements to string and then compare the strings
  nums.sort((a, b) => a - b);

  const triplets = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // if the current element is equal to the previous one, skip to avoid duplicate triplets
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    const targetSum = 0 - nums[i];
    let startIndex = i + 1;
    let endIndex = nums.length - 1;
    while (startIndex < endIndex) {
      const sum = nums[startIndex] + nums[endIndex];
      if (sum === targetSum) {
        triplets.push([nums[i], nums[startIndex], nums[endIndex]]);
        startIndex++;
        endIndex--;
        // if the left number is equal to the previous one, skip to avoid duplicate triplets
        while (startIndex < endIndex && nums[startIndex] === nums[startIndex - 1]) {
          startIndex++;
        }
        // if the right number is equal to the next one, skip to avoid duplicate triplets
        while (startIndex < endIndex && nums[endIndex] === nums[endIndex + 1]) {
          endIndex--;
        }
      } else if (sum > targetSum) {
        endIndex--;
      } else {
        startIndex++;
      }
    }
  }
  return triplets;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([])); // []
console.log(threeSum([0])); // []
console.log(threeSum([0, 0, 0])); // [[0,0,0]]
console.log(threeSum([0, 0, 0, 0])); // [[0,0,0]]
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])); // [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]

