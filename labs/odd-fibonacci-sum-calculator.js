function sumFibs(num) {
  // Initialize Fibonacci sequence with first two numbers
  let prev = 0;
  let curr = 1;
  let sum = 0;
    
  // Generate Fibonacci numbers and sum the odd ones
  while (curr <= num) {
    // Add to sum if current Fibonacci number is odd
    if (curr % 2 !== 0) {
      sum += curr;
    }
        
    // Generate next Fibonacci number
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
    
  return sum;
}

console.log(sumFibs(10));