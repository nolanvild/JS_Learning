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

//upgrgade button
upgradeButton.addEventListener('click', function(e)
    {
        multiplyer *= upgradeMultiplier;
        multiplyerDisplay.textContent = + multiplyer;
    });

//auto clicker button
function auto() {
    autoClicker += multiplyer;
    counterDisplay.textContent = clickCount + autoClicker;
}
autoClickerButton.addEventListener('click', function(e)
    {
        intervalId = setInterval(auto, 100);
        autoClickerButton.style.visibility = 'hidden';
    }
);
