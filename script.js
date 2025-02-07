// Function to roll the dice
function rollDice() {
    const dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice-result').innerText = `Dice: ${dice}`;
    return dice;
}

// Start game functionality
document.getElementById('start-btn').addEventListener('click', function() {
    document.getElementById('roll-btn').disabled = false;
    this.disabled = true; // Disable the start button
});

// Dice roll button functionality
document.getElementById('roll-btn').addEventListener('click', function() {
    const diceValue = rollDice();
    // Here, you can add logic to update the game state based on dice roll
});
