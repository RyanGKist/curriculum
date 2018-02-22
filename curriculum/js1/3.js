/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, b="hello") => {
  if (a != 0){
    return b += solution(a-1,b);
  }
  return "";
};

module.exports = {
  solution,
};
