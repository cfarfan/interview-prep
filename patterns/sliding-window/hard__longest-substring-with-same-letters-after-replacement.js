/**
 * Longest Substring with Same Letters after Replacement (hard)
 * 
 * Given a string with lowercase letters only, if you are allowed to replace
 * no more than k letters with any letter, find the length of the longest
 * substring having the same letters after replacement.
 * 
 * Example 1:
 * Input: String="aabccbb", k=2
 * Output: 5
 * Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".
 *
 * Example 2:
 * Input: String="abbcb", k=1
 * Output: 4
 * Explanation: Replace the 'c' with 'b' to have the longest repeating substring "bbbb".
 * 
 * Example 3:
 * Input: String="abccde", k=1
 * Output: 3
 * Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
 * 
 */

const lengthOfLongestSubstring = function (str, k) {
  const charFrequency = {};
  let maxFrequency = 0;
  let maxLength = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    charFrequency[rightChar] = (charFrequency[rightChar] || 0) + 1;
    maxFrequency = Math.max(charFrequency[rightChar], maxFrequency);
    if (windowEnd - windowStart + 1 - maxFrequency > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      windowStart++;
    }
    maxLength = Math.max(windowEnd - windowStart + 1, maxLength);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("aabccbb", 2)) // 5
console.log(lengthOfLongestSubstring("abbcb", 1)) // 4
console.log(lengthOfLongestSubstring("abccde", 1)) // 3