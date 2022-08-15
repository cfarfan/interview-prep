/**
 * URL: https://leetcode.com/problems/word-search/
 *
 * Word Search
 * Given an m x n grid of characters board and a string word, return true if
 * word exists in the grid.
 *
 * The word can be constructed from letters of sequentially adjacent cells,
 * where adjacent cells are horizontally or vertically neighboring. The same
 * letter cell may not be used more than once.
 *
 * Example 1:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 *
 * Example 2:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
 * Output: true
 *
 * Example 3:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
 * Output: false
 *
 * Constraints:
 * m == board.length
 * n = board[i].length
 * 1 <= m, n <= 6
 * 1 <= word.length <= 15
 * board and word consists of only lowercase and uppercase English letters.
 *
 * Follow up: Could you use search pruning to make your solution faster with a larger board?
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;
  const visited = new Set();

  function dfs(i, j, w) {
    if (w === word.length) return true;
    if (i < 0 || i >= rows) return false;
    if (j < 0 || j >= cols) return false;
    if (visited.has(`${i},${j}`)) return false;
    if (board[i][j] !== word[w]) return false;

    visited.add(`${i},${j}`);
    const result =
      dfs(i - 1, j, w + 1) ||
      dfs(i + 1, j, w + 1) ||
      dfs(i, j - 1, w + 1) ||
      dfs(i, j + 1, w + 1);
    visited.delete(`${i},${j}`);
    return result;
  }

  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      if (dfs(x, y, 0)) return true;
    }
  }
  return false;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);

console.log(
  exist(
    [
      ["C", "A", "A"],
      ["A", "A", "A"],
      ["B", "C", "D"],
    ],
    "AAB"
  )
);
