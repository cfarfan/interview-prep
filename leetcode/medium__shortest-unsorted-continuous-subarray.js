/**
 * URL: https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
 * 
 * Shortest Unsorted Continuous Subarray
 * 
 * Given an integer array nums, you need to find one continuous subarray
 * that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.
 * Return the shortest such subarray and output its length.
 * 
 * Example 1:
 * Input: nums = [2,6,4,8,10,9,15]
 * Output: 5
 * Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
 * 
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: 0
 * 
 * Example 3:
 * Input: nums = [1]
 * Output: 0
 * 
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -10^5 <= nums[i] <= 10^5
 * 
 * Follow up: Can you solve it in O(n) time complexity?
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  if (nums.length <= 1) return 0;

  let startIndex = 0;
  let endIndex = nums.length - 1;

  // left search
  while (startIndex + 1 < nums.length && nums[startIndex] <= nums[startIndex + 1]) {
    startIndex++;
  }

  // return early if array is already sorted
  if (startIndex === endIndex) {
    return 0;
  }

  //right search
  while (endIndex > 0 && nums[endIndex] >= nums[endIndex - 1]) {
    endIndex--;
  }

  // find the min and max of the initial interval
  let min = Infinity;
  let max = -Infinity;
  for (let i = startIndex; i <= endIndex; i++) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
  }

  // expand lower bound
  while (startIndex > 0 && nums[startIndex - 1] > min) {
    startIndex--;
  }

  // expand upper bound
  while (endIndex + 1 < nums.length && nums[endIndex + 1] < max) {
    endIndex++;
  }

  return endIndex - startIndex + 1;
};


console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])); // 5
console.log(findUnsortedSubarray([1, 2, 3, 4])); // 0
console.log(findUnsortedSubarray([1, 2, 3, 3, 3])); // 0
console.log(findUnsortedSubarray([1, 3, 2, 2, 2])); // 4
console.log(findUnsortedSubarray([1, 3, 2, 3, 3])); // 2
console.log(findUnsortedSubarray([2, 3, 3, 2, 4])); // 3





