let currentPlayer = 'red'; // Red player starts first
let player1Pos = 0; // Initial position of player 1
let player2Pos = 0; // Initial position of player 2

// Function to roll the dice
function rollDice() {
    const dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice-result').innerText = `Dice: ${dice}`;
    return dice;
}

// Function to move the player on the board
function movePlayer(player, steps) {
    let playerElem = document.getElementById(player);
    let currentPos = player === 'red' ? player1Pos : player2Pos;
    let newPos = currentPos + steps;

    if (newPos > 225) { // Assuming 225 is the max position (15x15 grid)
        newPos = 225; // Prevent moving out of the board
    }

    playerElem.style.left = `${(newPos % 15) * 35}px`; // Adjust x-position
    playerElem.style.top = `${Math.floor(newPos / 15) * 35}px`; // Adjust y-position

    if (player === 'red') {
        player1Pos = newPos;
    } else {
        player2Pos = newPos;
    }
}

// Start game functionality
document.getElementById('start-btn').addEventListener('click', function() {
    document.getElementById('roll-btn').disabled = false;
    this.disabled = true; // Disable the start button
});

// Dice roll button functionality
document.getElementById('roll-btn').addEventListener('click', function() {
    const diceValue = rollDice();
    movePlayer(currentPlayer, diceValue);

    // Switch player turn after each roll
    currentPlayer = currentPlayer === 'red' ? 'green' : 'red';
});
