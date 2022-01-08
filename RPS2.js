//stores player and computer scores
let computerScore = 0
let playerScore = 0
const computerOptions = ['rock', 'paper', 'scissor'];

//computer's options, random number selector, and stored choice for comparison 
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
let playerChoiceOrg = window.prompt("Chose your weapon: Rock, Paper, Scissors");
let playerChoice = playerChoiceOrg.toLowerCase();

//comparison function to check playerChoice against computerChoice and return strings based on findings
function theBattle() {
    computerPick()
    if (playerChoice === computerChoice) {
        return console.log('Tie!')
        }else console.log('Check Rolls');

            if (playerChoice == 'rock' && computerChoice == 'scissors') {
                playerScore++
                return console.log('Rock beats Scissors');
            }else if (playerChoice == 'scissors' && computerChoice == 'paper') {
                playerScore++
                return console.log('Scissor beats Paper');
            }else if (playerChoice == 'paper' && computerChoice == 'rock') {
                playerScore++
               return console.log('Paper beats rock');}
            else console.log('Computer wins')
    }