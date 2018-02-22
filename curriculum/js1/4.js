/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b) => {
  if (a != 0 ){
    return b += solution(a-1,b);
  }
  return "";
};

module.exports = {
  solution,
};
