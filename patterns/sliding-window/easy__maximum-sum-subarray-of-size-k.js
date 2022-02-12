/**
 * Maximum Sum Subarray of Size K (easy)
 * 
 * Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
 * 
 * Example 1:
 * Input: [2, 1, 5, 1, 3, 2], k=3
 * Output: 9
 * Explanation: Subarray with maximum sum is [5, 1, 3].
 * 
 * Example 2:
 * Input: [2, 3, 4, 1, 5], k=2
 * Output: 7
 * Explanation: Subarray with maximum sum is [3, 4].
 * 
 */

const maxSumSubArrOfSizeK = function (k, arr) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let windowStart = 0;
  let sum = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd];
    if (windowEnd - windowStart + 1 === k) {
      maxSum = Math.max(sum, maxSum);
      sum -= arr[windowStart];
      windowStart++;
    }
  }
  return maxSum;
};

console.log(maxSumSubArrOfSizeK(3, [2, 1, 5, 1, 3, 2])) // 9
console.log(maxSumSubArrOfSizeK(2, [2, 3, 4, 1, 5])) // 7