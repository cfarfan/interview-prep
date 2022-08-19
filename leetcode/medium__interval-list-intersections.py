##
# URL: https://leetcode.com/problems/interval-list-intersections/
#
# Interval List Intersections
#
# You are given two lists of closed intervals, firstList and secondList, where
# firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list
# of intervals is pairwise disjoint and in sorted order.
#
# Return the intersection of these two interval lists.
#
# A closed interval [a, b] (with a <= b) denotes the set of real numbers
# x with a <= x <= b.
#
# The intersection of two closed intervals is a set of real numbers that are
# either empty or represented as a closed interval. For example, the
# intersection of [1, 3] and [2, 4] is [2, 3].
#
# Example 1:
#
# Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
# Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
#
# Example 2:
# Input: firstList = [[1,3],[5,9]], secondList = []
# Output: []
#
# Constraints:
# 0 <= firstList.length, secondList.length <= 1000
# firstList.length + secondList.length >= 1
# 0 <= start_i < end_i <= 10^9
# end_i < start_i+1
# 0 <= start_j < end_j <= 10^9
# end_j < start_j+1
##

from typing import List
from heapq import heappush, heappop, heapify

class Solution:
      def intervalIntersection(self, firstList: List[List[int]], secondList: List[List[int]]) -> List[List[int]]:
            starts = []
            ends = []
            for start, end in firstList:
                  heappush(starts, start)
                  heappush(ends, end)
            for start, end in secondList:
                  heappush(starts, start)
                  heappush(ends, end)

            heappop(starts)
            results = []
            while starts:
                  currentStart = heappop(starts)
                  prevEnd = heappop(ends)
                  if(currentStart <= prevEnd):
                        results.append([currentStart, prevEnd])
            return results

if __name__ == "__main__":
      print(Solution().intervalIntersection([
            [0, 2],
            [5, 10],
            [13, 23],
            [24, 25],
      ],
      [
            [1, 5],
            [8, 12],
            [15, 24],
            [25, 26],
      ]))

      print(Solution().intervalIntersection([
            [1, 3],
            [5, 9],
      ],
      []))
