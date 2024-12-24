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

//Function to get human choice
function getHumanChoice() {
    let choice = prompt("What is your choice? Rock, paper or scissors?");
    return choice.toLowerCase();
}

//Player score variables

let humanScore = 0;
let computerScore = 0;

//Capitalize text
function capitalize(text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

//Single round logic
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {
                console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}!`)
                humanScore++;
} else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors")) {
            console.log(`You loose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}!`)
            computerScore++;
} else {
    console.log("Invalid choice");
}
}






//Entire game logic
function playGame() {
    let round = 1;
    while (round <= 5) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection,computerSelection);
        round++;
    }
    console.log("Game over!");
    if (humanScore > computerScore) {
        console.log("You win!")
    } else {
        console.log("You loose!");
    }
}

playGame()