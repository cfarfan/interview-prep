/**
 * A strobogrammatic number is a positive number that appears the same after
 * being rotated 180 degrees. For example, 16891 is strobogrammatic.
 *
 * Create a program that finds all strobogrammatic numbers with N digits.
 */

const getStrobogrammaticNumbers = function (digits) {
  const rotatedNumbersMap = {
    1: "1",
    6: "9",
    8: "8",
    9: "6",
  };
  const stroboNumbers = [];
  for (let i = 0; i < 10 ** digits; i++) {
    const strNum = i + "";
    const rotatedStr = strNum
      .split("")
      .reverse()
      .map((strDigit) =>
        strDigit in rotatedNumbersMap ? rotatedNumbersMap[strDigit] : "x"
      )
      .join("");
    if (strNum === rotatedStr) {
      stroboNumbers.push(i);
    }
  }
  return stroboNumbers;
};
