//stores player and computer scores
let computerScore = 0
let playerScore = 0
const computerOptions = ['rock', 'paper', 'scissor'];

///function playRound(){ 
///    computerPick()
///    playerChoiceOrg()
///    theBattle()

//computer's options, random number selector, and stored choice for comparison 
let computerChoice = computerPick();
function computerNumber() {
    result = Math.floor(Math.random()*3)
    return result;
}
function computerPick() {
    result = computerOptions[computerNumber()]
    return result;
}
// user choice and lowercasing to allow comparison
let playerChoiceOrg = window.prompt("Chose your weapon: Rock, Paper, Scissors");
let playerChoice = playerChoiceOrg.toLowerCase();

//computer and player choice comparison and score incrementation 
function theBattle() {

    //if (playerChoice == null)
    //return console.log('Indecision is no way to win The Battle')

    if (playerChoice === computerChoice) {
        return console.log("Tie!");
    }
    else if (playerChoice == 'rock'){ 
        if (computerChoice == 'paper'){
            computerScore++;
            return console.log('Computer Won, Paper beats Rock!');
        }  
        else{
            playerScore++
            return console.log('Player Won, Rock beats Scissors!');
        }
    }
    else if (playerChoice == 'scissors'){
        if(computerChoice == 'rock'){
            computerScore++;
            return console.log('Computer Won, Rock beats Scissors!');
        }
        else{
            playerScore++
            return console.log('Player Won, Scissors beat Paper!');
        }
    }
    else if (playerChoice == 'paper'){
        if (computerChoice == 'scissors'){
            computerScore++;
            return console.log('Computer Won, Scissors beat Paper!');
        }
        else{
            playerScore++
            return console.log('Player Won, Paper beats Rock!');
        }
    }
}
