function addTogether(first, second) {
  // Helper function to check if a value is a valid number
  function isValidNumber(num) {
    return typeof num === 'number' && !isNaN(num);
  }

  // If two arguments are provided
  if (arguments.length === 2) {
    // Check if both arguments are valid numbers
    if (isValidNumber(first) && isValidNumber(second)) {
      return first + second;
    } else {
      return undefined;
    }
  }

  // If only one argument is provided
  if (arguments.length === 1) {
    // Check if the first argument is a valid number
    if (!isValidNumber(first)) {
      return undefined;
    }

    // Return a function that waits for the second argument
    return function(second) {
      // Check if the second argument is a valid number
      if (isValidNumber(second)) {
        return first + second;
      } else {
        return undefined;
      }
    };
  }
}

console.log(addTogether(2, 3));
