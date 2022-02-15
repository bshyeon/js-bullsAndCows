const input = document.querySelectorAll("input");
const resultBtn = document.querySelector(".resultBtn");
const resetBtn = document.querySelector(".resetBtn");
const firstTable = document.querySelectorAll(".first");

let count = 0;

const reset = () => {
  count = 0;
  text.value = "";
};

const tableValue = () => {
  if (count < 9) {
    input.forEach((text) => {
      firstTable[count].innerText += text.value;
      text.value = "";
    });
    count += 1;
  } else {
    reset();
  }
};

resultBtn.addEventListener("click", tableValue);
resetBtn.addEventListener("click", reset);
