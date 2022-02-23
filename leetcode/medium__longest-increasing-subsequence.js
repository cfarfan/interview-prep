/**
 * URL: https://leetcode.com/problems/longest-increasing-subsequence/
 *
 * Longest Increasing Subsequence
 *
 * Given an integer array nums, return the length of the longest strictly
 * increasing subsequence. A subsequence is a sequence that can be derived from
 * an array by deleting some or no elements without changing the order of the
 * remaining elements. For example, [3,6,2,7] is a subsequence of the array
 * [0,3,1,6,2,2,7].
 *
 * Example 1:
 * Input: nums = [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 *
 * Example 2:
 * Input: nums = [0,1,0,3,2,3]
 * Output: 4
 *
 * Example 3:
 * Input: nums = [7,7,7,7,7,7,7]
 * Output: 1
 *
 * Constraints:
 * 1 <= nums.length <= 2500
 * -10^4 <= nums[i] <= 10^4
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const lis = [];
  lis.push(nums[0]);

  for (let i = 0; i < nums.length; i++) {
    const indexOfGreaterOrEqualNum = binarySearch(lis, nums[i]);
    if (indexOfGreaterOrEqualNum === -1) {
      lis.push(nums[i]);
    } else {
      lis[indexOfGreaterOrEqualNum] = nums[i];
    }
  }
  // console.log("***** LIS:", lis);
  return lis.length;
};

var binarySearch = function (arr, target) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let index = Infinity;
  while (startIndex <= endIndex) {
    let middleIndex = Math.ceil((endIndex + startIndex) / 2);
    if (arr[middleIndex] >= target) {
      index = Math.min(middleIndex, index);
      endIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }
  }
  return index !== Infinity ? index : -1;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 1
