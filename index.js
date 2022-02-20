const input = document.querySelectorAll("input");
const buttons = document.querySelectorAll("button");
const gameResult = document.querySelector(".gameResult");
const errorText = document.querySelector(".errorText");
const firstTable = document.querySelectorAll(".first");

let count = 0;

const inputValue = () => {
  const valueArray = [];
  input.forEach((text) => {
    valueArray.push(text.value);
  });
  firstTable[count].innerText = valueArray;
  count += 1;
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
