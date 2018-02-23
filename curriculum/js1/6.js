/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, sum = 0, originalNumber=a) => {
  if(a > 1){
    if(a != originalNumber){
      if(originalNumber % a == 0){
        sum += a;
        solution(a-1,sum,originalNumber);
      }
    }
    return solution(a-1,sum,originalNumber)
  }
  return sum;
};

module.exports = {
  solution,
};
