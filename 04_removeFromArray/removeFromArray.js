const removeFromArray = function (array, ...args) {
  // method 1:
  //   for (const arg of args) {
  //     for (let i = 0; i < array.length; i++) {
  //       if (arg === array[i]) {
  //         array.splice(i, 1);
  //         i--;
  //       }
  //     }
  //   }
  //   return array;

  // method 2:
  //   const new_array = [];
  //   for (const item of array) {
  //     if (!args.includes(item)) {
  //       new_array.push(item);
  //     }
  //   }
  //   return new_array;

  // method 3:
  return array.filter((val) => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
