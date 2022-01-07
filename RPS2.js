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

if (playerChoice === computerChoice) {
    console.log('Tie!')
}   else console.log('Roll checks');
if (playerChoice === 'rock' && computerChoice === 'scissors') {
    playerScore++
     console.log('You win, Rock beats Scissors!');
}   else {
    computerScore++
     console.log('Computer Wins, Paper beats Rock!');}
     
if (playerChoice === 'scissors' &&  computerChoice === 'paper') {
    playerScore++
     console.log('You win, Scissors beat Paper!');
}   else {
    computerScore++
     console.log('Computer Wins, Rock beats Scissors!');}
    
if (playerChoice === 'paper' && computerChoice === 'rock') {
    playerScore++
     console.log('You win, Paper beats Rock');
}   else {
    computerScore++ 
     console.log('Computer Wins, Scissors beat paper');}
     