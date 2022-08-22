'use strict';

/*
console.log(document.querySelector(".message").textContent);
console.log(document.querySelector(".message").textContent = "Correct Number !..");

console.log(document.querySelector(".number").textContent = 13);
console.log(document.querySelector(".number").textContent = 10);

console.log(document.querySelector(".guess").value);
document.querySe
lector(".guess").value = 23;
*/

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess , typeof guess);

    // When there is no input 
    if(!guess) {
        displayMessage("No number");

        //  When player wins
    } else if(guess === secretNumber) {
            displayMessage("Correct number!")
            document.querySelector(".number").textContent = secretNumber;
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "30rem";
    
            if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
            }
        // When guess is wrong
    } else if(guess !== secretNumber){
        if(score > 1) {
            displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("You lost the game")
            document.querySelector(".score").textContent = 0;
        }
    }
});


const guess2 = document.querySelector(".guess").value;

document.querySelector(".again").addEventListener("click", function(){

    const guess = document.querySelector(".guess").value = "";
    score = document.querySelector(".score").textContent = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector(".number").textContent = "?";
    
    displayMessage("Start guessing...");
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    
    document.querySelector(".score").textContent = score;
});

