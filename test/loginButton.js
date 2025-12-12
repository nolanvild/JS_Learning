import {clickCount} from "./functions.js"

const loginButton = document.getElementById("loginButton");
const lbScores = document.getElementById("lbScores")
let signedIn = false;
let currentUsername = '';
let maxUser = "";
let maxScore = 0
loginButton.style.visibility = 'visible';

class User {
    constructor(name, highScore){
        this.name = name
        this.highScore = highScore
    }
}

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
            currentUsername = username;
            }
    }
})

// Determine highest score
for (let i = 0; i < localStorage.length; i++) {
    const user = localStorage.key(i); // get the username
    const score = Number(localStorage.getItem(user)); // get the score
    if (score > maxScore) {
        maxScore = score;
        maxUser = user;
    }
}

// Automatically Refresh Scoreboard once logged in
function refreshScoreboard(userName){
    let userScore = Number(localStorage.getItem(userName))
    console.log(userScore)
    if (userScore > maxScore){
        maxScore = userScore;
        maxUser = userName;
        }
    lbScores.textContent = "The current high score is user: " 
                            + maxUser 
                            + " with a score of: " 
                            + maxScore
                            + " points.";
    }

function refreshLocalStorage(username) {
    localStorage.setItem(username, clickCount)
}

function autoRefresh(){
    if (signedIn === true){
    refreshScoreboard(currentUsername);
    refreshLocalStorage(currentUsername);
}
}

let intervalId = setInterval(function() {
    autoRefresh();
    }, 5000);

export {signedIn}
