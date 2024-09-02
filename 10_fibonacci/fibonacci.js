const fibonacci = function (index) {
  index = parseInt(index);
  if (index < 0) {
    return "OOPS";
  }
  if (index === 0) {
    return 0;
  } else if (index === 1) {
    return 1;
  } else {
    return fibonacci(index - 2) + fibonacci(index - 1);
  }
};

// Do not edit below this line
module.exports = fibonacci;
