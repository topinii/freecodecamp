function smallestCommons(arr) {
  // Sort the array to ensure we have the range in correct order
  const [min, max] = arr.sort((a, b) => a - b);

  // Helper function to find GCD (Greatest Common Divisor) using Euclidean algorithm
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // Helper function to find LCM of two numbers
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  // Start with the first number in range
  let result = min;

  // Calculate LCM of all numbers in the range
  for (let i = min + 1; i <= max; i++) {
    result = lcm(result, i);
  }

  return result;
}

// Test the function
console.log(smallestCommons([1, 5]));   // Should return 60
console.log(smallestCommons([5, 1]));   // Should return 60 (same as above)
console.log(smallestCommons([2, 10]));  // Should return 2520
console.log(smallestCommons([1, 13]));  // Should return 360360
