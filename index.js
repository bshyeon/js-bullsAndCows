const input = document.querySelectorAll("input");
const buttons = document.querySelectorAll("button");
const gameResult = document.querySelector(".gameResult");
const errorText = document.querySelector(".errorText");
const firstTable = document.querySelectorAll(".first");

let count = 0;
const valueArray = [];

const inputValue = () => {
  input.forEach((text) => {
    valueArray.push(text.value);
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.dataset.value) {
      case "result":
        inputValue();
        break;
      case "reset":
        break;
    }
  });
});
