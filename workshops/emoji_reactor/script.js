// Create a function to update button count
function updateCount(button) {
  const countElement = button.querySelector('.count');
  const countText = countElement.textContent;
  const currCount = parseInt(countText.split('/')[0]);
  
  // Check if count is already at maximum (10)
  if (currCount < 10) {
    // Increment the count and update the display
    const newCount = currCount + 1;
    countElement.textContent = `${newCount}/10`;
  }
}

// Select all buttons with the emoji-btn class
const btns = document.querySelectorAll('.emoji-btn');

// Add event listeners to all buttons using forEach
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    updateCount(btn);
  });
});
