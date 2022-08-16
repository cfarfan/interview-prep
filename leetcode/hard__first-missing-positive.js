/**
 * URL: https://leetcode.com/problems/first-missing-positive/
 *
 * Given an unsorted integer array nums, return the smallest missing positive integer.
 * You must implement an algorithm that runs in O(n) time and uses constant extra space.
 *
 * Example 1:
 * Input: nums = [1,2,0]
 * Output: 3
 *
 * Example 2:
 * Input: nums = [3,4,-1,1]
 * Output: 2
 *
 * Example 3:
 * Input: nums = [7,8,9,11,12]
 * Output: 1
 *
 * Constraints:
 * 1 <= nums.length <= 5 * 105
 * -2^31 <= nums[i] <= 2^31 - 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const isOutOfBound = (num) => num > nums.length;
  const isWellPlaced = (num, i) => num - 1 === i;
  const isDuplicated = (num, i) => nums[num - 1] === nums[i];
  const swap = (i, j) => {
    const temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
  };

  let i = 0;
  while (i < nums.length) {
    const curr = nums[i];
    if (curr > 0) {
      if (
        isOutOfBound(curr) ||
        isWellPlaced(curr, i) ||
        isDuplicated(curr, i)
      ) {
        i++;
        continue;
      }
      swap(curr - 1, i);
    } else {
      i++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 !== nums[i]) {
      return i + 1;
    }
  }
  return nums.length + 1;
};

console.log(firstMissingPositive([1, 2, 0])); // 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); //1
console.log(firstMissingPositive([1])); //2
console.log(firstMissingPositive([1, 1])); //2
