const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');

const MAX_LENGTH = 50;

textInput.addEventListener('input', () => {
  // Trim input if it exceeds max length
  if (textInput.value.length > MAX_LENGTH) {
    textInput.value = textInput.value.slice(0, MAX_LENGTH);
  }

  const currentLength = textInput.value.length;

  // Update the character count text
  charCount.textContent = `Character Count: ${currentLength}/${MAX_LENGTH}`;

  // Change color based on count
  if (currentLength >= MAX_LENGTH) {
    charCount.style.color = 'red';
  } else {
    charCount.style.color = 'black';
  }
});
