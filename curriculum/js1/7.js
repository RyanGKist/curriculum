/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, originalNumber=a) => {
  a = a-1;

  if(a <= 1){
    return a===1;
  }
  if(a != originalNumber){
    if(originalNumber % a == 0){
      return false;
    }
    return solution(a,originalNumber);
  }
};

module.exports = {
  solution,
};
