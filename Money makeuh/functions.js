//add alert when you arent able to

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
const upgradeCostDisplay = document.getElementById("upgradeCostDisplay");
const autoCostDisplay = document.getElementById("autoCostDisplay");

//clicker button
cookieButton.addEventListener("click", function (e) {
  clickCount += multiplyer;
  counterDisplay.textContent = clickCount + autoClicker;
});

//upgrade button
upgradeButton.addEventListener("click", function (e) {
  if (clickCount - upgradeButtonCost >= 0) {
    multiplyer *= upgradeMultiplier;
    multiplyerDisplay.textContent = +multiplyer;
    clickCount -= upgradeButtonCost;
    upgradeButtonCost *= upgradeButtonScaling;
    upgradeCostDisplay.textContent = upgradeButtonCost;
    counterDisplay.textContent = clickCount;
  } else {
  }
});

//auto clicker button
function auto() {
  autoClicker += multiplyer;
  counterDisplay.textContent = clickCount + autoClicker;
}
autoClickerButton.addEventListener("click", function (e) {
  if (clickCount - autoClickerCost >= 0) {
    let intervalId = setInterval(auto, 100);
    clickCount = clickCount - autoClickerCost;
    autoClickerCost *= autoClickerScaling;
    counterDisplay.textContent = clickCount;
  } else {
    Error;
  }
});

//not enough funds alert

// upgrade visibility
let autoClickerCost = 10000;
let upgradeButtonCost = 100;
const autoClickerScaling = 2;
const upgradeButtonScaling = 2;

const upgradeCheck = setInterval(checkForUpgrades, 100);

function checkForUpgrades() {
  if (clickCount >= autoClickerCost) {
    autoClickerButton.style.visibility = "visible";
    upgradeButton.style.visibility = "visible";
  }
}

export { clickCount };
