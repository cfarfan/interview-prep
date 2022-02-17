/**
 * URL: https://leetcode.com/problems/product-of-array-except-self/
 *
 * Product of Array Except Self
 *
 * Given an integer array nums, return an array answer such that answer[i] is
 * equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * Example 2:
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 *
 * Constraints:
 * 2 <= nums.length <= 10^5
 * -30 <= nums[i] <= 30
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
 *
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const output = [];
  let accum = 1;
  for (let left = 0; left < nums.length; left++) {
    if (left === 0) {
      output.push(1);
      continue;
    }
    output.push(nums[left - 1] * accum);
    accum *= nums[left - 1];
  }

  for (let right = nums.length - 1; right >= 0; right--) {
    if (right === nums.length - 1) {
      accum = 1;
      continue;
    }
    output[right] *= accum * nums[right + 1];
    accum *= nums[right + 1];
  }
  return output;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
