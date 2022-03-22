let computerScore = 0;
let playerScore = 0;

roundOutcome = document.querySelector('#roundOutcome')
playerScorePage = document.querySelector('#playerScorePage');
computerScorePage = document.querySelector('#computerScorePage');
playerChoicePage = document.querySelector('#playerChoicePage');
computerChoicePage = document.querySelector('#computerChoicePage');


rock = document.querySelector('#rock');
paper = document.querySelector('#paper');
scissors = document.querySelector('#scissors');
buttons = document.querySelectorAll('.btn');

//container and func for the computerChoice
let computerChoice = (computerOptions) => {
    computerOptions = ['rock', 'paper', 'scissors'];
    randomNumber = Math.floor(Math.random()*3);
    result = computerOptions[randomNumber];
    return result;
}

rock.addEventListener('click', () => {
    playRound('rock', computerChoice());
} );
paper.addEventListener('click', () => {
    playRound('paper', computerChoice());
} );
scissors.addEventListener('click', () => {
    playRound('scissors', computerChoice());

} );


//singular round run and comparison functions
function playRound(playerInput, computerChoice) {    
    rpsComparison(playerInput, computerChoice)
    playerScorePage.textContent = `Player score is: ` + playerScore;
    computerScorePage.textContent = `Computer Score is: ` + computerScore;
    playerChoicePage.textContent = `The Player chose: ${playerInput}`;
    computerChoicePage.textContent = `The Computer Chose: ${computerChoice}`;
}

//comparison function to check playerInput against computerChoice and return strings based on findings
function rpsComparison(playerInput, computerChoice) {
    const playerWinnerRock = 'Rock beats Scissors!';
    const playerWinnerScissors = 'Scissors beats Paper!';
    const playerWinnerPaper = 'Paper beats Rock!';
    const computerWinner = 'Computer Wins!';
    if (playerInput === computerChoice) {
        roundOutcome.textContent = 'Tie!'
        return 
            }else {
            if (playerInput == 'rock' && computerChoice == 'scissors') {
                    playerScore++;
                    roundOutcome.textContent = playerWinnerRock;
                    return;
                }else if (playerInput == 'scissors' && computerChoice == 'paper') {
                    playerScore++;
                    roundOutcome.textContent = playerWinnerScissors;
                    return;
                }else if (playerInput == 'paper' && computerChoice == 'rock') {
                    playerScore++;
                    roundOutcome.textContent = playerWinnerPaper;
                    return;}
            else {
                computerScore++;
                roundOutcome.textContent = computerWinner
                return;}
            }
            
}


