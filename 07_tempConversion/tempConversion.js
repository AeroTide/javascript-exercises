const convertToCelsius = function(f) {
  let a = Math.round((f-32)*(5/9)*10)/10;
  return a;
};

const convertToFahrenheit = function(c) {
  let b = Math.round((c*(9/5)+32)*10)/10;
  return b;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
