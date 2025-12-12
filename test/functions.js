//variables
let clickCount = 0;
let multiplyer = 1;
const upgradeMultiplier = 2;

const cookieButton = document.getElementById("clicker");
const counterDisplay = document.getElementById("counterDisplay");
const multiplyerDisplay = document.getElementById("multiplyerDisplay");
const upgradeButton = document.getElementById("upgradeButton");

//clicker button
cookieButton.addEventListener('click', function(e)
    {
        clickCount += multiplyer;
        counterDisplay.textContent = clickCount;
    });

//upgrade button
upgradeButton.addEventListener('click', function(e)
    {
        multiplyer += upgradeMultiplier;
        multiplyerDisplay.textContent = + multiplyer;
    });

export  {clickCount}