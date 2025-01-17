#!/usr/bin/node

exports.addMeMaybe = function (number, theFunction) {
  number += 1;  // Increment the number
  theFunction(number);  // Call the function with the incremented number
};

