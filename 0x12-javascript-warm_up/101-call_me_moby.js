#!/usr/bin/node

exports.callMeMoby = function (x, theFunction) {
  for (let i = 0; i < x; i++) {
    theFunction(); // Executes the function the specified number of times
  }
};

