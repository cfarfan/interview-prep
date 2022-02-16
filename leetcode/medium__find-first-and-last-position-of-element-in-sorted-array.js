/**
 * URL: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * 
 * Find First and Last Position of Element in Sorted Array
 * 
 * Given an array of integers nums sorted in non-decreasing order,
 * find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * 
 * Example 2:
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * 
* Example 3:
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 * 
 * Constraints:
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * nums is a non-decreasing array.
 * -10^9 <= target <= 10^9
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let targetIndex = [-1, -1];
  if (!nums.length) {
    return targetIndex;
  }

  // left most target search
  let startIndex = 0;
  let endIndex = nums.length;
  while (startIndex < endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (nums[middleIndex] < target) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex;
    }
  }

  // if target was not found in first search then return early
  targetIndex[0] = startIndex;
  if (nums[targetIndex[0]] !== target) {
    return [-1, -1];
  }

  // right most target search
  startIndex = 0;
  endIndex = nums.length;
  while (startIndex < endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (nums[middleIndex] > target) {
      endIndex = middleIndex;
    } else {
      startIndex = middleIndex + 1;
    }
  }
  targetIndex[1] = endIndex - 1;

  return targetIndex;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]
console.log(searchRange([7, 7, 7, 7, 7, 8, 10, 11, 12, 13], 7)); // [ 0, 4 ]
console.log(searchRange([1], 1)); // [0,0]
