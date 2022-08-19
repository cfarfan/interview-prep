/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  if (s.length < k) {
    return false;
  }
  if (s.length === k) {
    return true;
  }

  const frequency = {};
  for (let i = 0; i < s.length; i++) {
    frequency[s[i]] = (frequency[s[i]] || 0) + 1;
  }

  const oddsCounter = Object.values(frequency).reduce(
    (prev, curr) => prev + (curr % 2),
    0
  );
  return oddsCounter <= k;
};
