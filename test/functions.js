//variables
let clickCount = 0;
let multiplyer = 1;
let autoClicker = 0;
const upgradeMultiplier = 2;

const cookieButton = document.getElementById("clicker");
const counterDisplay = document.getElementById("counterDisplay");
const multiplyerDisplay = document.getElementById("multiplyerDisplay");
const upgradeButton = document.getElementById("upgradeButton");
const autoClickerButton = document.getElementById("autoClickerButton");

//clicker button
cookieButton.addEventListener('click', function(e)
    {
        clickCount += multiplyer;
        counterDisplay.textContent = clickCount + autoClicker;
    });

//upgrade button
upgradeButton.addEventListener('click', function(e)
    {
        multiplyer *= upgradeMultiplier;
        multiplyerDisplay.textContent = + multiplyer
        clickCount -= upgradeButtonCost;
        upgradeButton.style.visibility = 'hidden';
        upgradeButtonCost *= upgradeButtonScaling
    });

//auto clicker button
function auto() {
    autoClicker += multiplyer;
    counterDisplay.textContent = clickCount + autoClicker;
}
autoClickerButton.addEventListener('click', function(e)
    {
        let intervalId = setInterval(auto, 1000);
        clickCount = clickCount - autoClickerCost;
        autoClickerButton.style.visibility = 'hidden';
        autoClickerCost *= autoClickerScaling
    }
);

// upgrade visibility
let autoClickerCost = 10;
let upgradeButtonCost = 10;
const autoClickerScaling = 2;
const upgradeButtonScaling = 2;

autoClickerButton.style.visibility = 'hidden';
upgradeButton.style.visibility = "hidden";
const upgradeCheck = setInterval(checkForUpgrades, 500);

function checkForUpgrades(){
    if (clickCount >= autoClickerCost) {
        autoClickerButton.style.visibility = 'visible';
        upgradeButton.style.visibility = 'visible';
        }
}

export  {clickCount}