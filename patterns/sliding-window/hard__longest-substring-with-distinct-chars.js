/**
 * Longest Substring with Distinct Characters (hard)
 * 
 * Given a string, find the length of the longest substring, which has all distinct characters.
 * 
 * Example 1:
 * Input: String="aabccbb"
 * Output: 3
 * Explanation: The longest substring with distinct characters is "abc".
 * 
 * Example 2:
 * Input: String="abbbb"
 * Output: 2
 * Explanation: The longest substring with distinct characters is "ab".
 * 
 * Example 3:
 * Input: String="abccde"
 * Output: 3
 * Explanation: Longest substrings with distinct characters are "abc" & "cde".
 * 
 */

const nonRepeatSubstring = function (str) {
  const charFrequency = {};
  let windowStart = 0;
  let maxLength = 0
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    charFrequency[rightChar] = (charFrequency[rightChar] || 0) + 1;
    while (charFrequency[rightChar] > 1) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      windowStart++;
    }
    maxLength = Math.max(windowEnd - windowStart + 1, maxLength);
  }

  return maxLength;
}

console.log(nonRepeatSubstring("aabccbb")) // 3
console.log(nonRepeatSubstring("abbbb")) // 2
console.log(nonRepeatSubstring("abccde")) // 3