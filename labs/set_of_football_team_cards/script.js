// Create the footballTeam object
const footballTeam = {
  team: 'FC United',
  year: 2025,
  headCoach: 'Alex Rivera',
  players: [
    { name: 'Liam Torres', position: 'forward', isCaptain: true },
    { name: 'Ethan Kim', position: 'midfielder', isCaptain: false },
    { name: 'Noah Johnson', position: 'defender', isCaptain: false },
    { name: 'Oliver Davis', position: 'goalkeeper', isCaptain: false },
    { name: 'Mason Lee', position: 'defender', isCaptain: false },
  ]
};

// Display team info
document.getElementById('team').textContent = footballTeam.team;
document.getElementById('year').textContent = footballTeam.year;
document.getElementById('head-coach').textContent = footballTeam.headCoach;

// Get elements
const playerCardsContainer = document.getElementById('player-cards');
const dropdown = document.getElementById('players');

// Function to render player cards
function renderPlayers(position) {
  playerCardsContainer.innerHTML = ''; // Clear current cards

  // Filter players by selected position
  const filteredPlayers = footballTeam.players.filter(player => {
    return position === 'all' || player.position === position;
  });

  // Generate HTML for each player
  filteredPlayers.forEach(player => {
    const card = document.createElement('div');
    card.classList.add('player-card');

    const playerName = document.createElement('h2');
    playerName.textContent = player.isCaptain
      ? `(Captain) ${player.name}`
      : player.name;

    const playerPosition = document.createElement('p');
    playerPosition.textContent = `Position: ${player.position}`;

    card.appendChild(playerName);
    card.appendChild(playerPosition);
    playerCardsContainer.appendChild(card);
  });
}

// Initial render (All players)
renderPlayers('all');

// Update player cards when dropdown changes
dropdown.addEventListener('change', (e) => {
  renderPlayers(e.target.value);
});
