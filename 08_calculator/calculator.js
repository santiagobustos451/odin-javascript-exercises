const add = function(a,b) {
  return a+b;	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	result = 0;
  array.forEach(element => {
    result += element;
  });
  return result;
};

const multiply = function(array) {
	result = 1;
  array.forEach(element => {
    result *= element;
  });
  return result;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  result = 1;
	for(let i = 2; i <= a; i++){
    result *= i;
  }
  return result;
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
