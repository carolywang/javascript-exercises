const findTheOldest = function (arr) {
  return arr
    .map((person) => {
      if (!person.yearOfDeath) {
        person["age"] = new Date().getFullYear() - person["yearOfBirth"];
      } else {
        person["age"] = person["yearOfDeath"] - person["yearOfBirth"];
      }
      return person;
    })
    .reduce((oldest, current) => {
      return oldest.age < current.age ? current : oldest;
    });
  //     .sort((a, b) => a.age - b.age);
  //   return sortedArr[arr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
