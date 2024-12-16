function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = '';
    if (playerChoice === computerChoice) {
        result = `It's a tie! You both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }

    document.getElementById('result').innerText = result;
}
