function sumPrimes(num) {
  // If input is less than 2, return 0 (no primes below 2)
  if (num < 2) {
    return 0;
  }

  // Helper function to check if a number is prime
  function isPrime(n) {
    // 2 is the only even prime number
    if (n === 2) return true;

    // Even numbers greater than 2 are not prime
    if (n % 2 === 0) return false;

    // Check odd divisors up to square root of n
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }

    return true;
  }

  let sum = 0;

  // Check all numbers from 2 to num (inclusive)
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

// Test the function
console.log(sumPrimes(10)); // Should return 17 (2 + 3 + 5 + 7)
console.log(sumPrimes(5));  // Should return 10 (2 + 3 + 5)
console.log(sumPrimes(2));  // Should return 2
console.log(sumPrimes(0));  // Should return 0
