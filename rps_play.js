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