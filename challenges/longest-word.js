export function getLongestWord(sentence) {
  const cleaned = String(sentence).replace(/\./g, '');
  const words = cleaned.trim().split(/\s+/);
  let longest = '';
  for (const w of words) {
    if (w.length > longest.length) {
      longest = w;
    }
  }
  return longest;
}

console.log(getLongestWord('The quick brown fox jumps over the lazy dog'));