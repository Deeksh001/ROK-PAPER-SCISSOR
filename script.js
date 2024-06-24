document.getElementById('start-game').addEventListener('click', startGame);
const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');
const playerGreeting = document.getElementById('player-greeting');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        playGame(choice.id);
    });
});

function startGame() {
    const playerName = document.getElementById('player-name').value;
    if (playerName.trim()) {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('game').style.display = 'block';
        playerGreeting.innerText = `Hello, ${playerName}! Make your choice:`;
    } else {
        alert('Please enter your name.');
    }
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

    resultText.innerHTML = `
        You chose: ${playerChoice}<br>
        Computer chose: ${computerChoice}<br>
        ${winner}
    `;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a draw!';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}
