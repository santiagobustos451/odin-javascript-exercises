const convertToCelsius = function(f) {
  return parseFloat(((f-32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(c) {
  return parseFloat((c/(5/9) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
