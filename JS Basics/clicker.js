let clickCounter = 0;
const cookieButton = document.getElementById("clicker");
let display = document.getElementById("counterDisplay");
cookieButton.addEventListener('click', function(e){
    clickCounter += 1;
    display.textContent = "The number of clicks is: " + clickCounter;
})