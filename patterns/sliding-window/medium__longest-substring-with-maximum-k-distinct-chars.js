/**
 * Longest Substring with maximum K Distinct Characters (medium)
 * 
 * Given a string, find the length of the longest substring in it with no more than K distinct characters.
 * 
 * Example 1:
 * Input: String="araaci", K=2
 * Output: 4
 * Explanation: The longest substring with no more than '2' distinct characters is "araa".
 * 
 * Example 2:
 * Input: String="araaci", K=1
 * Output: 2
 * Explanation: The longest substring with no more than '1' distinct characters is "aa".
 * 
 * Example 3:
 * Input: String="cbbebi", K=3
 * Output: 5
 * Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
 * 
 * Example 4:
 * Input: String="cbbebi", K=10
 * Output: 6
 * Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".
 * 
 */

const longestSubstringWithKDistinctChars = function (str, k) {
  let charFrequency = {};
  let windowStart = 0;
  let distinctChars = 0;
  let maxLength = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    charFrequency[rightChar] = (charFrequency[rightChar] || 0) + 1;
    if (charFrequency[rightChar] === 1) {
      distinctChars++;
    }
    if (distinctChars <= k) {
      maxLength = Math.max(windowEnd - windowStart + 1, maxLength);
    }
    while (distinctChars > k) {
      let leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        distinctChars--;
      }
      windowStart++;
    }
  }

  return maxLength;
};

console.log(longestSubstringWithKDistinctChars('araaci', 2)) // 4
console.log(longestSubstringWithKDistinctChars('araaci', 1)) // 2
console.log(longestSubstringWithKDistinctChars('cbbebi', 3)) // 5
console.log(longestSubstringWithKDistinctChars('cbbebi', 10)) // 6

