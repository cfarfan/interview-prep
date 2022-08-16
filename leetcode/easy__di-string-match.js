/**
 * URL: https://leetcode.com/problems/di-string-match/
 *
 * DI String Match
 *
 * A permutation perm of n + 1 integers of all the integers in the range [0, n]
 * can be represented as a string s of length n where:
 * s[i] == 'I' if perm[i] < perm[i + 1], and s[i] == 'D' if perm[i] > perm[i + 1].
 * Given a string s, reconstruct the permutation perm and return it. If there
 * are multiple valid permutations perm, return any of them.
 *
 * Example 1:
 * Input: s = "IDID"
 * Output: [0,4,1,3,2]
 *
 * Example 2:
 * Input: s = "III"
 * Output: [0,1,2,3]
 *
 * Example 3:
 * Input: s = "DDI"
 * Output: [3,2,0,1]
 *
 * Constraints:
 * 1 <= s.length <= 10^5
 * s[i] is either 'I' or 'D'.
 */

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let low = 0;
  let high = s.length;
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      arr.push(low);
      low++;
    } else {
      arr.push(high);
      high--;
    }
  }

  if (s[s.length - 1] === "I") {
    arr.push(low);
  } else {
    arr.push(high);
  }
  return arr;
};

console.log(diStringMatch("IDID"));
console.log(diStringMatch("III"));
console.log(diStringMatch("DDI"));
