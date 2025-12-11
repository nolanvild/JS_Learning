import {clickCounter} from "clicker.js"

class Upgrade {
    constructor(name, cost, modifier){
        this.name = 'name';
        this.cost = 'cost';
        this.modifier = 0;
        this.purchased = false;
    }
}

const doubler = new Upgrade("Doubler", 10, 2)
let upgradeButton = document.getElementById("upgradeButton").style.visibility = 'hidden';
console.log(upgradeButton)
if (clickCounter >= 10 && doubler.purchased === false){
    upgradeButton = document.getElementById("upgradeButton").style.visibility = 'visible'
}
console.log()

// Once points hit a certain amount, display a new button
// New button will subtract amount of points and adjust according to modifier