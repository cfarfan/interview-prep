/**
 *  URL: https://leetcode.com/problems/shortest-word-distance/
 *
 * Given a list of words and two words word1 and word2,
 * return the shortest distance between these two words in the list.
 *
 * Example:
 * Assume that words =["practice", "makes", "perfect", "coding", "makes"].
 * Input: word1 = "coding", word2 = "practice"
 * Output: 3
 *
 * Input: word1 = "makes", word2 = "coding"
 * Output: 1
 *
 * Note:
 * You may assume that word1 does not equal to word2, and word1 and word2
 * are both in the list.
 */

var shortestDistance = function (words, word1, word2) {
  let result = Infinity;
  let w1 = null;
  let w2 = null;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      w1 = i;
    } else if (words[i] === word2) {
      w2 = i;
    }

    if (w1 !== null && w2 !== null) {
      const distance = Math.abs(w2 - w1);
      result = distance < result ? distance : result;
    }
  }
  return result;
};

console.log(
  shortestDistance(
    ["practice", "makes", "perfect", "coding", "makes"],
    "coding",
    "practice"
  )
);
console.log(
  shortestDistance(
    ["practice", "makes", "perfect", "coding", "makes"],
    "makes",
    "coding"
  )
);
