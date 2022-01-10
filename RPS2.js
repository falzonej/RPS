function playRound() {

    //stores player and computer scores
    let computerScore = 0;
    let playerScore = 0;

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
                    playerScore++
                    return console.log('Rock beats Scissors');
                }else if (playerChoice == 'scissors' && computerChoice == 'paper') {
                    playerScore++
                    return console.log('Scissor beats Paper');
                }else if (playerChoice == 'paper' && computerChoice == 'rock') {
                    playerScore++
                    return console.log('Paper beats rock');}
            else 
                computerScore++
                return console.log('Computer wins');
            };
        }

console.log(playerScore)
console.log(computerScore)
return console.log(theBattle());    
}
