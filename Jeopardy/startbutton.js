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
  playerBox.className = "playerBox";
  playerDisplay.appendChild(playerBox);

  playerBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      numPlayers = playerBox.value;
      playerBox.remove();

      localStorage.setItem("numPlayers", numPlayers);

      // Create an entry for each player name and listen for enter key
      let nameBoxes = [];
      for (i = 0; i < numPlayers; i++) {
        const nameBox = document.createElement("input");
        nameBox.placeholder = "Player " + (i + 1) + " Name";
        nameBox.className = "nameBox";
        playerDisplay.appendChild(nameBox);
        nameBoxes.push(nameBox);
      }
      nameBoxes[nameBoxes.length - 1].addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          // Collect all player names
          const playerNames = nameBoxes.map((box) => box.value);
          localStorage.setItem("playerNames", JSON.stringify(playerNames));
          nameBoxes.forEach((box) => box.remove());
          themeSong.pause();

          for (let i = 0; i < numPlayers; i++) {
            localStorage.setItem("player" + i + "Score", "0");
            const playerInfoDisplay = document.createElement("div");
            playerInfoDisplay.className = "playerInfoDisplay";
            playerInfoDisplay.id = "playerInfoDisplay" + i;
            const playerNames = JSON.parse(localStorage.getItem("playerNames"));
            playerInfoDisplay.textContent = playerNames[i];
            playerDisplay.appendChild(playerInfoDisplay);

            const playerScoreDisplay = document.createElement("div");
            playerScoreDisplay.className = "playerScoreDisplay";
            playerScoreDisplay.id = "playerScoreDisplay" + i;
            playerScoreDisplay.textContent = "$0";
            playerInfoDisplay.appendChild(playerScoreDisplay);

            const playerAddPoints = document.createElement("button");
            playerAddPoints.className = "playerAddPoints";
            playerAddPoints.id = "playerAddPoints" + i;
            playerAddPoints.addEventListener("click", function (e) {
              currentScore = Number(
                localStorage.getItem("player" + i + "Score")
              );
              currentScore += Number("200");
              const playerScore = document.getElementById(
                "playerScoreDisplay" + i
              );
              playerScore.textContent = "$" + currentScore;
              localStorage.setItem("player" + i + "Score", currentScore);
            });

            const playerRemovePoints = document.createElement("button");
            playerRemovePoints.className = "playerRemovePoints";
            playerRemovePoints.id = "playerRemovePoints" + i;
            playerRemovePoints.addEventListener("click", function (e) {
              currentScore = Number(
                localStorage.getItem("player" + i + "Score")
              );
              currentScore -= Number("200");
              const playerScore = document.getElementById(
                "playerScoreDisplay" + i
              );
              playerScore.textContent = "$" + currentScore;
              localStorage.setItem("player" + i + "Score", currentScore);
            });

            playerInfoDisplay.appendChild(playerRemovePoints);
            playerInfoDisplay.appendChild(playerAddPoints);
          }
        }
      });
    }
  });
});
