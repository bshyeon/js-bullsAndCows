const input = document.querySelectorAll("input");
const resultBtn = document.querySelector(".resultBtn");
const resetBtn = document.querySelector(".resetBtn");
const gameResult = document.querySelector(".gameResult");
const firstTable = document.querySelectorAll(".first");
let count = 0;

const handleReset = () => {
  count = 0;
  gameResult.innerText = "";
  firstTable.forEach((text) => {
    text.innerText = "";
  });
};

const tableValue = () => {
  if (count < 9) {
    input.forEach((text) => {
      firstTable[count].innerText += text.value;
      text.value = "";
    });
    count += 1;
  } else {
    gameResult.innerText = "정답은 ----입니다.";
  }
};

resultBtn.addEventListener("click", tableValue);
resetBtn.addEventListener("click", handleReset);
