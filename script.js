//Rock beat scissors
//Scissors beat paper
//Paper beats rock

//Same object = tie, play again
//Number of rounds to win?

//Function to get computer choice
function getComputerChoice() {
    //Array to pick from
    let choice = ["rock", "paper", "scissors"];
    //Generates random number 0-2
    let randomNumber = Math.floor(Math.random()*3);
    //Picks number 0-2 with according array member from choice array.
    return choice[randomNumber];
}

