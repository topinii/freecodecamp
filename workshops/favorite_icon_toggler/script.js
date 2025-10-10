// Select all favorite-icon buttons
const favoriteIcons = document.querySelectorAll('.favorite-icon');

// Add event listeners to each button
favoriteIcons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('filled')) {
      // If already filled, unfill it
      button.classList.remove('filled');
      button.innerHTML = '&#9825;'; // empty heart
    } else {
      // Otherwise, fill it
      button.classList.add('filled');
      button.innerHTML = '&#10084;'; // filled heart
    }
  });
});
