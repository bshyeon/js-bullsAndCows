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

  if (valueArray.indexOf("") !== -1) {
    errorText.innerText = "숫자를 입력해주세요";
    // 문자 입력 에러 추가
    // 10 이상 숫자 입력 에러 추가
  } else {
    errorText.innerText = "";
    firstTable[count].innerText = valueArray;
    count += 1;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.dataset.value) {
      case "result":
        inputValue();
        break;
      case "reset":
        // reset 함수 추가
        break;
    }
  });
});
