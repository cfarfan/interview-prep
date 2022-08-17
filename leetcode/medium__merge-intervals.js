/**
 * URL: https://leetcode.com/problems/merge-intervals/
 *
 * Merge Intervals
 *
 * Given an array of intervals where intervals[i] = [starti, endi], merge all
 * overlapping intervals, and return an array of the non-overlapping intervals
 * that cover all the intervals in the input.
 *
 * Example 1:
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
 *
 * Example 2:
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 *
 * Constraints:
 * 1 <= intervals.length <= 10^4
 * intervals[i].length == 2
 * 0 <= start_i <= end_i <= 10^4
 *
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const starts = [];
  const ends = [];

  for (let i = 0; i < intervals.length; i++) {
    starts.push(intervals[i][0]);
    ends.push(intervals[i][1]);
  }
  const compareFn = (a, b) => a - b;
  const sortedStarts = starts.sort(compareFn);
  const sortedEnds = ends.sort(compareFn);

  const overlaps = [];
  let start = 0;

  for (let j = 1; j < sortedStarts.length; j++) {
    if (sortedStarts[j] > sortedEnds[j - 1]) {
      overlaps.push([sortedStarts[start], sortedEnds[j - 1]]);
      start = j;
    }
  }

  overlaps.push([sortedStarts[start], sortedEnds[sortedEnds.length - 1]]);

  return overlaps;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);

console.log(
  merge([
    [1, 4],
    [0, 4],
  ])
);
