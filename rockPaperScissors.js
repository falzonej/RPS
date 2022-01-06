computerOptions = ['rock', 'paper', 'scissor'];

function computerNumber() {
    result = Math.floor(Math.random()*3)
    return result;
}
function computerPick() {
    result = computerOptions[computerNumber()]
    return result;
}

let computerChoice = computerPick();

let playerChoiceOrg = window.prompt("Chose your weapon: Rock, Paper, Scissors");
let playerChoice = playerChoiceOrg.toLowerCase();

function theBattle() {

    if (playerChoice === computerChoice) {
        return console.log("Tie!")
    }
    else if (playerChoice == 'rock'){ 
        if (computerChoice == 'paper'){
            return console.log('Computer Won!')
        }  
    else{
            return console.log('Player Won')
        }
    }
    else if (playerChoice == 'scissors'){
        if(computerChoice == 'rock'){
            return console.log('Computer Won!')
        }
        else{
            return console.log('Player Won')
        }
    }
    else if (playerChoice == 'paper'){
        if (computerChoice == 'rock'){
            return console.log('Computer Won')
        }
        else{
            return console.log('Player Won')
        }
    }
}