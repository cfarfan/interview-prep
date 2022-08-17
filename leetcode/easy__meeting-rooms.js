/**
 * URL: https://leetcode.com/problems/meeting-rooms/
 *
 * Meeting Rooms
 *
 * Given an array of meeting time intervals where intervals[i] = [starti, endi],
 * determine if a person could attend all meetings.
 *
 * Example 1:
 * Input: intervals = [[0,30],[5,10],[15,20]]
 * Output: false
 *
 * Example 2:
 * Input: intervals = [[7,10],[2,4]]
 * Output: true
 *
 * Constraints:
 * 0 <= intervals.length <= 10^4
 * intervals[i].length == 2
 * 0 <= start_i < end_i <= 106
 */

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  const compareByStart = (a, b) => a[0] - b[0];
  const sortedMeetings = intervals.sort(compareByStart);

  for (let i = 1; i < sortedMeetings.length; i++) {
    const prevEnd = sortedMeetings[i - 1][1];
    const currStart = sortedMeetings[i][0];
    if (prevEnd > currStart) {
      return false;
    }
  }
  return true;
};

console.log(
  canAttendMeetings([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);

console.log(
  canAttendMeetings([
    [5, 8],
    [6, 8],
  ])
);
