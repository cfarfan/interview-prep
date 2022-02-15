/**
 * URL: https://leetcode.com/problems/maximum-product-subarray/
 * 
 * Maximum Product Subarray
 * 
 * Given an integer array nums, find a contiguous non-empty subarray within
 * the array that has the largest product, and return the product.
 * The test cases are generated so that the answer will fit in a 32-bit integer.
 * 
 * A subarray is a contiguous subsequence of the array.
 * 
 * Example 1:
 * Input: nums = [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 * 
 * Example 2:
 * Input: nums = [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 * 
 * Constraints:
 * 1 <= nums.length <= 2 * 10^4
 * -10 <= nums[i] <= 10
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 */



/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (!nums.length) {
    return 0;
  }
  let max = Number.NEGATIVE_INFINITY;
  let localMax = 1;
  let localMin = 1;
  for (let i = 0; i < nums.length; i++) {
    const prevMax = localMax;
    localMax = Math.max(nums[i], nums[i] * prevMax, nums[i] * localMin);
    localMin = Math.min(nums[i], nums[i] * prevMax, nums[i] * localMin);
    max = Math.max(max, localMax);
  }
  return max;
};


console.log(maxProduct([2, 3, -2, 4])) // 6
console.log(maxProduct([-2, 0, -1])) // 0