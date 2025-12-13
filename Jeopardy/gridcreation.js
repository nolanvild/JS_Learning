const prices = [200, 400, 600, 800, 1000];
const categories = [
  "Ur Mom",
  "League of Legends",
  "Chess",
  "Josh",
  "Ur Mom (Again)",
  "My Mom?",
];

const categoryList = document.getElementById("categoryList");
const board = document.getElementById("priceBoard");
let i = 1;

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
    board.appendChild(button);
  });
});

// Need to add button functionality. Should this be in the forEach loop or not? not sure...
