let cFinal = 0;
let gFinal = 0;
let games = 0;
let uWin = 0;
let comWin = 0;

let input;
let result;
let regexWin = /win/;
let regexTie = /tie/;
let regex = /^rock$|^paper$|^scissors$/;

function playRound() {
    if (result == "rock"){
        if (cFinal == "rock") gFinal = "It's a tie!!! rock vs rock";
        else if (cFinal == "paper") gFinal = "You lose, paper vs rock :(";
        else gFinal = "You win, rock vs scissors!!!";
        return gFinal;
    }
    else if (result == "paper"){
        if (cFinal == "rock") gFinal = "You win, paper vs rock!!!";
        else if (cFinal == "paper") gFinal = "It's a tie!!! paper vs paper";
        else gFinal = "You lose, scissors vs paper :(";
        return gFinal;
    }
    else {
        if (cFinal == "rock") gFinal = "You lose, rock vs scissors :(";
        else if (cFinal == "paper") gFinal = "You win, scissors vs paper!!!";
        else gFinal = "It's a tie!!! scissors vs scissors";
        return gFinal;
    }
}

function comPlay(){
    cGuess = Math.floor(Math.random()*3);	
    if (cGuess == 0) cFinal = "rock";
    else if (cGuess == 1) cFinal = "paper";
    else cFinal = "scissors";
    return cFinal;
}

while (games<5){
    
    input = prompt("Enter your choice");
    result = input.toLowerCase();
    
    if (result.match(regex) && result != null){			

    comPlay();
    playRound();
            
        if (playRound().match(regexWin)){
            uWin++;
            games++;
            console.log(gFinal +"\nGames you WON: " +uWin + "\nGames played:  " + games + "\nGames pc WON: " + comWin);
        }
        else if (playRound().match(regexTie)) {
            games++;
            console.log(gFinal +"\nGames you WON: " +uWin + "\nGames played:  " + games + "\nGames pc WON: " + comWin);
        }
        else{
            comWin++;
            games++;
            console.log(gFinal +"\nGames you WON: " +uWin + "\nGames played:  " + games + "\nGames pc WON: " + comWin);
        }				
    }
    else console.log("This is a rock, paper, scissors game");
}