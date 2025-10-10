function pairElement(str) {
  const arr = []; // Declare the array

  // Split the string into individual characters
  for (let i = 0; i < str.length; i++) {
    const char = str[i]; // Get each individual character

    if (char === 'A') {
      arr.push(['A', 'T']);
    } else if (char === 'T') {
      arr.push(['T', 'A']);
    } else if (char === 'C') {
      arr.push(['C', 'G']);
    } else if (char === 'G') {
      arr.push(['G', 'C']);
    }
  }

  return arr; // input ATCG, return [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]]
}

pairElement('ATCG');