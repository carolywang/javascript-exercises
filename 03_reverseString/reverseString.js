const reverseString = function (string) {
  const stringArray = string.split("");
  let reversedArray = [];
  for (const char of stringArray) {
    reversedArray.unshift(char);
  }
  reversed = reversedArray.join("");
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
