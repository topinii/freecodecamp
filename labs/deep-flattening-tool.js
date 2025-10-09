function steamrollArray(arr) {
  // Create a result array to store flattened elements
  const result = [];

  // Recursive helper function to process each element
  function flatten(element) {
    // If the element is an array, recursively flatten it
    if (Array.isArray(element)) {
      // Iterate through each element in the array and flatten it
      for (let i = 0; i < element.length; i++) {
        flatten(element[i]);
      }
    } else {
      // If it's not an array, add it directly to the result
      result.push(element);
    }
  }

  // Start the flattening process
  flatten(arr);

  // Return the flattened result
  return result;
}

// Test the function
console.log(steamrollArray([['a'], ['b']])); // Should return ['a', 'b']
console.log(steamrollArray([1, [2], [3, [[4]]]])); // Should return [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]])); // Should return [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])); // Should return [1, {}, 3, 4]
