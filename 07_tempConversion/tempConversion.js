const convertToCelsius = function(temp) {
  let farenheit = (temp-32)* 5 / 9;
  if (Number.isInteger(farenheit)) {
    return farenheit
  }
  else {
    farenheit = Number(farenheit.toFixed(1));
    return farenheit;
  }
};

const convertToFahrenheit = function(temp) {
  let celsius = (temp * 9/5) + 32;
  if (Number.isInteger(celsius)) {
    return celsius;
  }
  else {
    celsius = Number(celsius.toFixed(1));
    return celsius;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

//(x-32)* 5/9
//x × 9/5 + 32