const rock = document.querySelector('#r');
const paper = document.querySelector('#p');
const scissors = document.querySelector('#s');

let pcRandom = 0;
let gamesPlayed = 0;
let userScore = 0;
let pcScore = 0;

let input = prompt('How many rounds of pain would you like?');

function randomGuess(){
    let guess = Math.floor(Math.random() * 3);
    if (guess == 0) pcRandom = 'rock';
    else if (guess == 1) pcRandom = 'paper';
    else pcRandom = 'scissors';
    return pcRandom;
}

function rockPlay(){
    while (gamesPlayed < input){
        randomGuess();
        alert('Computer guessed ' + pcRandom);
        document.getElementById('games').innerText = ++gamesPlayed;
        if (pcRandom == 'rock') {
            document.getElementById('games').innerText = gamesPlayed;
            break;
        }    
        else if (pcRandom == 'paper') {
            document.getElementById('pc').innerText = ++pcScore;
            break;
        }
        else {
            document.getElementById('user').innerText = ++userScore;
            break;
        }
    }
    while (gamesPlayed == input) {
        if (userScore > pcScore) { 
            alert('Game over...you WON');
            break;
        }
        else if (userScore == pcScore) {
            alert('You live to play another day');
            break;
        }
        else {
            alert('Game over...you LOST');
            break;
        }
    }
}

function paperPlay(){
    while (gamesPlayed < input){
        randomGuess();
        alert('Computer guessed ' + pcRandom);
        document.getElementById('games').innerText = ++gamesPlayed;
        if (pcRandom == 'rock' ) {
            document.getElementById('user').innerText = ++userScore;    
            break;
        }
        else if (pcRandom == 'paper') { 
            document.getElementById('games').innerText = gamesPlayed;
            break;
        }
        else { 
            document.getElementById('pc').innerText = ++pcScore;
            break;
        }
    }
    while (gamesPlayed == input) {
        if (userScore > pcScore) { 
            alert('Game over...you WON');
            break;
        }
        else if (userScore == pcScore) {
            alert('You live to play another day');
            break;
        }
        else {
            alert('Game over...you LOST');
            break;
        }
    }
}

function scissorPlay(){
    while (gamesPlayed < input) {
        randomGuess();
        alert('Computer guessed ' + pcRandom);
        document.getElementById('games').innerText = ++gamesPlayed;
        if (pcRandom == 'rock') { 
            document.getElementById('pc').innerText = ++pcScore;    
            break;
        }
        else if (pcRandom == 'paper') {
            document.getElementById('user').innerText = ++userScore;
            break;
        }
        else {
            document.getElementById('games').innerText = gamesPlayed;
            break;
        }
    }
    while (gamesPlayed == input) {
        if (userScore > pcScore) { 
            alert('Game over...you WON');
            break;
        }
        else if (userScore == pcScore) {
            alert('You live to play another day');
            break;
        }
        else {
            alert('Game over...you LOST');
            break;
        }
    }
}

rock.addEventListener('click', rockPlay);
paper.addEventListener('click', paperPlay);
scissors.addEventListener('click', scissorPlay);