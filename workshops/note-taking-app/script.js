const noteEl = document.getElementById('note');
const statusEl = document.getElementById('status');

let currentContent = '';

noteEl.addEventListener('blur', () => {
  const newContent = noteEl.innerHTML;

  currentContent = newContent;

  console.log(currentContent);
  statusEl.textContent = 'Note saved successfully!';
});

window.addEventListener('DOMContentLoaded', () => {
  noteEl.textContent = currentContent;
});