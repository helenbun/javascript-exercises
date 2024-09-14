const add = function(a, b) {
	return (a+b);
};

const subtract = function(a, b) {
	return (a-b);
};

const sum = function(array) {
	let total = 0;
  array.forEach((item) => {
    total = total + item;
  })
  return total;
};

const multiply = function(array) {
  let total = 1;
  array.forEach((item) => {
    total = total * item;
  })
  return total;
};

const power = function(a,b) {
	return(a ** b);
};

const factorial = function(n) {
  let f = n;
	if (f === 1 || f === 0){
    return 1;
  }
  else {
    while (n >= 2) {
      f = f * (n-1);
      n -= 1;
    }
  return f;
  }
};

//Multiply number by n-1 then n-- until n = 2
//If n = 0 or n =1, factorial = 1.

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
