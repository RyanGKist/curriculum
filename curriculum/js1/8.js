/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b,counter=0, denominator=0) => {
  if(counter <= a){
    if(a % counter == 0 && b % counter == 0){
      denominator = counter;
      return solution(a,b,counter+=1,denominator);
    }
    return solution(a,b,counter+=1,denominator);
  }
  return denominator;
};

module.exports = {
  solution,
};
