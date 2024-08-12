const sumAll = function (start, end) {
  let sum;
  if (
    start < 0 ||
    end < 0 ||
    Math.floor(start) != start ||
    Math.floor(end) != end ||
    typeof start != "number" ||
    typeof end != "number"
  ) {
    return "ERROR";
  }

  if (end >= start) {
    sum = ((start + end) * (end - start + 1)) / 2;
  } else {
    sum = ((start + end) * (start - end + 1)) / 2;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
