/**
 * URL: https://leetcode.com/problems/sum-of-two-integers/
 *
 * Sum of Two Integers
 *
 * Given two integers a and b, return the sum of the two integers without using
 * the operators + and -.
 *
 * Example 1:
 * Input: a = 1, b = 2
 * Output: 3
 *
 * Example 2:
 * Input: a = 2, b = 3
 * Output: 5
 *
 * Constraints:
 * -1000 <= a, b <= 1000
 *
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  if (b === 0) {
    return a;
  }
  const xor = a ^ b;
  const carry = (a & b) << 1;
  return getSum(xor, carry);
};

console.log(getSum(1, 2)); // 3
console.log(getSum(2, 3)); // 5
console.log(getSum(20, 30)); // 50
console.log(getSum(-1, 1)); // 0
console.log(getSum(-1000, 1)); // -999
