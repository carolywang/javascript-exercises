const palindromes = function (str) {
  str = str
    .toLowerCase()
    .replace(/[\.,?!]/g, "")
    .replace(/\s/g, "");
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] != str[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
