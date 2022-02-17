/**
 * Find the Missing Number (easy)
 *
 * We are given an array containing n distinct numbers taken from the range 0 to n.
 * Since the array has only n numbers out of the total n+1 numbers,
 * find the missing number.
 *
 * Example 1:
 * Input: [4, 0, 3, 1]
 * Output: 2
 *
 * Example 2:
 * Input: [8, 3, 5, 2, 4, 6, 0, 1]
 * Output: 7
 *
 */

const findMissingNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const j = nums[i] - 1;
    if (j !== i) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const number = i + 1;
    if (number !== nums[i]) {
      return number;
    }
  }

  return -1;
};

console.log(findMissingNumber([4, 0, 3, 1])); // 2
console.log(findMissingNumber([8, 3, 5, 2, 4, 6, 0, 1])); // 7
console.log(findMissingNumber([7, 3, 5, 2, 4, 6, 0, 1])); // 8
