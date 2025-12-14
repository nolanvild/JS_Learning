const startButton = document.getElementById("startButton");
const themeSong = document.getElementById("themeSong");
const playerDisplay = document.getElementById("playerDisplay");
localStorage.clear();
let numPlayers = 0;

startButton.addEventListener("click", function (e) {
  // Create the start button and determine number of players
  themeSong.currentTime = 0;
  themeSong.play();
  startButton.remove();
  const playerBox = document.createElement("input");
  playerBox.placeholder = "Enter player count";
  playerDisplay.appendChild(playerBox);

  playerBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      numPlayers = playerBox.value;
      console.log(numPlayers);
      playerBox.remove();

      localStorage.setItem("numPlayers", numPlayers);

      // Create an entry for each player name and listen for enter key
      let nameBoxes = [];
      for (i = 0; i < numPlayers; i++) {
        const nameBox = document.createElement("input");
        nameBox.placeholder = "Player " + (i + 1) + " Name";
        nameBox.class = "nameBox";
        playerDisplay.appendChild(nameBox);
        nameBoxes.push(nameBox);
      }
      nameBoxes[nameBoxes.length - 1].addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          console.log("yes");

          // Collect all player names
          const playerNames = nameBoxes.map((box) => box.value);
          localStorage.setItem("playerNames", JSON.stringify(playerNames));
          nameBoxes.forEach((box) => box.remove());
          themeSong.pause();

          for (i = 0; i < numPlayers; i++) {
            const playerInfoDisplay = document.createElement("p");
            playerInfoDisplay.className = "playerInfoDisplay";
            playerInfoDisplay.id = "playerInfoDisplay" + i;
            const playerNames = JSON.parse(localStorage.getItem("playerNames"));
            playerInfoDisplay.textContent = playerNames[i];
            playerDisplay.appendChild(playerInfoDisplay);
          }
        }
      });
    }
  });
});
