const input = document.querySelectorAll("input");
const buttons = document.querySelectorAll("button");
const gameResult = document.querySelector(".gameResult");
const errorText = document.querySelector(".errorText");
const firstTable = document.querySelectorAll(".first");

let count = 0;

const handleReset = () => {
  count = 0;
  gameResult.innerText = "";
  errorText.innerText = "";
  firstTable.forEach((text) => {
    text.innerText = "";
  });
};

const tableValue = () => {
  if (count < 9) {
    input.forEach((text) => {
      if (text.value == "") {
        errorText.innerText = "빈 칸 없이 숫자를 입력해주세요.";
        firstTable[count].innerText = "";
        errorCheck = true;
      } else {
        errorText.innerText = "";
        firstTable[count].innerText += text.value;
        text.value = "";
        errorCheck = false;
      }
    });
  } else {
    gameResult.innerText = "정답은 ----입니다.";
  }
  if (errorCheck == false) {
    count += 1;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.dataset.value) {
      case "result":
        tableValue();
        break;
      case "reset":
        handleReset();
        break;
    }
  });
});
