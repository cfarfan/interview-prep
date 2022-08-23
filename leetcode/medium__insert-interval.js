/**
 * https://leetcode.com/problems/insert-interval/submissions/
 *
 * Insert Interval
 *
 * You are given an array of non-overlapping intervals intervals where
 * intervals[i] = [start_i, end_i] represent the start and the end of the ith
 * interval and intervals is sorted in ascending order by starti. You are also
 * given an interval newInterval = [start, end] that represents the start and
 * end of another interval.
 *
 * Insert newInterval into intervals such that intervals is still sorted in
 * ascending order by start_i and intervals still does not have any overlapping
 * intervals (merge overlapping intervals if necessary).
 *
 * Return intervals after the insertion.
 *
 * Example 1:
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 *
 * Example 2:
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 *
 * Constraints:
 * 0 <= intervals.length <= 10^4
 * intervals[i].length == 2
 * 0 <= start_i <= end_i <= 105
 * intervals is sorted by start_i in ascending order.
 * newInterval.length == 2
 * 0 <= start <= end <= 105
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];
  let intervalInserted = false;

  for (let i = 0; i < intervals.length; i++) {
    const curr = intervals[i];
    if (newInterval[1] < curr[0] && !intervalInserted) {
      result.push(newInterval);
      intervalInserted = true;
    }
    if (intervalInserted) {
      result.push(curr);
      continue;
    }

    if (curr[1] < newInterval[0]) {
      result.push(curr);
    } else {
      newInterval = [
        Math.min(curr[0], newInterval[0]),
        Math.max(curr[1], newInterval[1]),
      ];
    }
  }
  if (!intervalInserted) {
    result.push(newInterval);
  }
  return result;
};

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);
console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
console.log(insert([], [4, 8]));
