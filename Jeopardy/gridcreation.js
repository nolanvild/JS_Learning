const categoryList = document.getElementById("categoryList");
const board = document.getElementById("priceBoard");
let mainDisplay = document.getElementById("screenDisplay");

const prices = [200, 400, 600, 800, 1000];
const categories = [
  "Ur Mom",
  "League of Legends",
  "Chess",
  "Josh",
  "Ur Mom (Again)",
  "My Mom?",
];

const questions = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

categories.forEach((category, i) => {
  const div = document.createElement("div");
  div.className = "category" + i;
  div.textContent = category;
  categoryList.appendChild(div);
});

prices.forEach((prices, i) => {
  categories.forEach((category, j) => {
    const button = document.createElement("button");
    button.className = "cell" + i + j;
    button.textContent = "$" + prices;
    button.addEventListener("click", function (e) {
      mainDisplay.textContent = "question" + i + j;
      button.textContent = "";
      button.disabled = "true";
    });
    board.appendChild(button);
  });
});
