/**
 * Smallest Subarray With a Greater Sum (easy)
 * 
 * Given an array of positive numbers and a positive number ‘S,’ find the length of the
 * smallest contiguous subarray whose sum is greater than or equal to ‘S’.
 * Return 0 if no such subarray exists.
 * 
 * Example 1:
 * Input: [2, 1, 5, 2, 3, 2], S=7 
 * Output: 2
 * Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
 * 
 * Example 2:
 * Input: [2, 1, 5, 2, 8], S=7 
 * Output: 1
 * Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
 * 
 * Example 3:
 * Input: [3, 4, 1, 1, 6], S=8 
 * Output: 3
 * Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
 * 
 */

const smallestSubArrSum = function (s, arr) {
  let minLength = Number.POSITIVE_INFINITY;
  let sum = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd];
    while (sum >= s) {
      minLength = Math.min(windowEnd - windowStart + 1, minLength);
      sum -= arr[windowStart];
      windowStart++;
    }
  }
  return minLength === Number.POSITIVE_INFINITY ? 0 : minLength;
};


console.log(smallestSubArrSum(7, [2, 1, 5, 2, 3, 2])) // 2
console.log(smallestSubArrSum(7, [2, 1, 5, 2, 8])) // 1
console.log(smallestSubArrSum(8, [3, 4, 1, 1, 6])) // 3
