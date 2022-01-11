//stores player and computer scores
let computerScore = 0;
let playerScore = 0;

//full game 
function playGame() {
    while (playerScore || computerScore < 4) 
    if (playerScore > 4)
        return console.log(playerScore)("Weiner winner");
    else if (computerScore > 4){
        return console.log(computerScore), ('Skynet went Live...');}
    else{ playRound(); }
}
//singular round run and comparison functions
function playRound() {

    //computer's options, random number selector, and stored choice for comparison 
    let computerOptions = ['rock', 'paper', 'scissors'];
    let computerChoice = computerPick();
    function computerNumber() {
        let result = Math.floor(Math.random()*3)
        return result;
    }
    function computerPick() {
        let result = computerOptions[computerNumber()]
        return result;
    }
    // user choice and lowercasing to allow comparison
    let playerChoice = playerChoiceOriginal().toLowerCase();
    function playerChoiceOriginal() {
        let result = window.prompt('Chose your weapon: Rock, Paper, Scissors')
        return result;
    }

    //comparison function to check playerChoice against computerChoice and return strings based on findings
    function theBattle() {  

        if (playerChoice === computerChoice) {
            return console.log('Tie!')
            }else {
                console.log(playerChoice) 
                console.log(computerChoice)
            if (playerChoice == 'rock' && computerChoice == 'scissors') {
                    let playerWinnerRock = 'Rock beats Scissors'
                    playerScore++;
                    return console.log(playerWinnerRock);
                }else if (playerChoice == 'scissors' && computerChoice == 'paper') {
                    let playerWinnerScissors = 'Scissors beats Paper!'
                    playerScore++;
                    return console.log(playerWinnerScissors);
                }else if (playerChoice == 'paper' && computerChoice == 'rock') {
                    let playerWinnerPaper = 'Paper beats Rock!'
                    playerScore++;
                    return console.log(playerWinnerPaper);}
            else {
                let cpuWinner = "Computer Wins" 
                computerScore++;
                return console.log(cpuWinner);}
            };
        }

return console.log(theBattle());
}
