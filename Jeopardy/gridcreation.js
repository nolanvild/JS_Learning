const categoryList = document.getElementById("categoryList");
const board = document.getElementById("priceBoard");
let mainDisplay = document.getElementById("screenDisplay");
let gameData;

const prices = [200, 400, 600, 800, 1000];
let category = "";
const categories = [1, 2, 3, 4, 5, 6];

fetch("Questions_Categories_Answers.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load JSON");
    }
    return response.json();
  })
  .then((data) => {
    gameData = data;
    categories.forEach((category, i) => {
      const div = document.createElement("div");
      div.className = "category" + i;
      div.textContent = gameData.categories[i];
      categoryList.appendChild(div);
    });

    prices.forEach((prices, i) => {
      categories.forEach((category, j) => {
        const button = document.createElement("button");
        button.className = "cell" + i + j;
        button.textContent = "$" + prices;
        button.addEventListener("click", function (e) {
          mainDisplay.textContent =
            gameData.questions["Category" + (j + 1) + "_" + (i + 1) * 200];
          button.textContent = "";
          button.disabled = "true";
        });
        board.appendChild(button);
      });
    });
  });
