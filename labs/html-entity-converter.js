function convertHTML(str) {
  // Create an object mapping characters to their HTML entities
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;'
  };

  // Accepts a string as input
  // Uses a regex pattern /[&<>"']/g to find all instances of the special characters globally
  // </>Replaces each character with its corresponding HTML entity using the htmlEntities object
  // Returns the converted string
  return str.replace(/[&<>"']/g, char => htmlEntities[char]);
}

console.log(convertHTML('<>'));
console.log(convertHTML('&'));