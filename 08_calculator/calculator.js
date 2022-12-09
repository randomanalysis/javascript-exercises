const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(theArgs) {
  let total = 0;
	for (const arg of theArgs) {
    total = total + arg;
  }
  return total;

};

const multiply = function(theArgs) {
  if (theArgs.length == 0){
    return 0;
  } else {

    const initialValue = 1;
    const mult =  theArgs.reduce(
      (accumulator, currentValue) => accumulator * currentValue, initialValue
    );
    return mult;
  }
  
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(x) {
	let sum = 1;
  while (x > 0) {
    sum = sum * x;
    x--;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
