var calc = {
  add: function(addend1, addend2) {
    return addend1 + addend2;
  },
  // This func substracts two numbers and returns the difference
  subtract: function(minund, subtrahed) {
    return minund - subtrahed;
  },
  // This func multiplies two numbers and returns the product
  multiply: function(multiple, multiplier) {
    return multiple * multiplier;
  },
  // This func divides tow numbers and returns the quotient
  divide: function(dividend, divisor) {
    return dividend / divisor;
  },
  // This func with raise the first number to the exponent of the second number
  exponent: function (number, exponent) {
    var result = Math.pow(number, exponent);
    return result;
  },
}

console.log(calc.add(3, 7));
console.log(calc.subtract(14, 7));
console.log(calc.multiply(7, 5));
console.log(calc.divide(63, 9));
console.log(calc.exponent(2, 3));
