// Need to double check how to import this properly from another file. 
// Is there a better way to store global variables?
import {clickCount} from "./functions.js"

class User {
    constructor(name, highScore){
        this.name = name
        this.highScore = highScore
    }
}

const loginButton = document.getElementById("loginButton");
loginButton.style.visibility = 'visible';
let signedIn = false;
let currentUser = '';

// Login button logic
loginButton.addEventListener('click', function(e){
    if (!signedIn) {
        const username = prompt("Please enter your name:");
            if (username) {
                const user1 = new User(username, clickCount)
                console.log(user1);
                signedIn = true;
                if (!localStorage.getItem(username) && signedIn === true){
                    localStorage.setItem(username, user1.highScore);
                    }
            loginButton.style.visibility = 'hidden';
            refreshScoreboard(username);
            currentUser = username;
            }
    }
})

// Scoreboard logic
let maxScore = 0;
const lbScores = document.getElementById("lbScores")

function refreshScoreboard(userName){
    let userScore = Number(localStorage.getItem(userName))
    console.log(userScore)
    if (userScore > maxScore){
        maxScore = userScore;
        }
    lbScores.textContent = "The current high score is user: " 
                            + userName 
                            + " with a score of: " 
                            + userScore
                            + " points.";
    }

function refreshLocalStorage(username) {
    localStorage.setItem(username, clickCount)
}

function autoRefresh(){
    if (signedIn === true){
    refreshScoreboard(currentUser);
    refreshLocalStorage(currentUser);
}
}

let intervalId = setInterval(function() {
    autoRefresh();
    }, 5000);

export {signedIn}
