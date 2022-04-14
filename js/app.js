// Nemeh function 2 utga avna hoorond n nemne
const add = function (a, b) {
  return a + b;
};
// hasah function 2 utga avna hoorond n hasna
const subtract = function (a, b) {
  return a - b;
};
// hasah function 2 utga avna hoorond n huvaana
const divide = function (a, b) {
  return a / b;
};
// hasah function 2 utga avna hoorond n vrjine
const multiply = function (a, b) {
  return a * b;
};
/**  random function 2 utga avna hoorond n oruulsan 2 toonii hoorond random number generate hiine
 *
 * @param {number} min - baga utga oruulna
 * @param {number} max - ih utga oruulana
 *
 */
function randomNumber(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
}
/**
 * fahrenheit to celsius calculator
 * @param {number} a convert hiih degree oruulna
 * @param {number} b defualt parameter utga oruulaagvi bol C gesen utga butsaana
 */

const convertfahrenheit = function (a, b = " C") {
  let convert = (((a - 32) * 5) / 9).toFixed(2);
  return [convert + b];
};
/**
 * fahrenheit to celsius calculator
 * @param {number} a convert hiih degree oruulna
 * @param {number} b defualt parameter utga oruulaagvi bol F gesen utga butsaana
 */
const convertcelsius = function (a, b = " F") {
  let convert = ((a * 9) / 5 + 32).toFixed(2);
  return [convert + b];
};

console.log(convertfahrenheit(32));
console.log(convertcelsius(-14));
