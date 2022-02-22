const input = document.querySelectorAll("input");
const buttons = document.querySelectorAll("button");
const gameResult = document.querySelector(".gameResult");
const errorText = document.querySelector(".errorText");
const firstTable = document.querySelectorAll(".first");

let count = 0;
const inputValue = () => {
  const valueArray = [];
  input.forEach((text) => {
    valueArray.push(parseInt(text.value));
  });

  const blankCheck = valueArray.indexOf("") !== -1;
  const nanCheck = valueArray.includes(NaN) === true;
  const valueRangeCheck = valueArray.find((item) => {
    return item >= 10;
  });
  const duplicateNumber = new Set(valueArray);

  if (blankCheck || nanCheck) {
    errorText.innerText = "숫자를 입력해주세요.";
  } else if (valueRangeCheck) {
    errorText.innerText = "10미만의 숫자를 입력해주세요.";
  } else if (duplicateNumber.size < 4) {
    errorText.innerText = "중복된 숫자가 있습니다.";
  } else {
    errorText.innerText = "";
    firstTable[count].innerText = valueArray;
    count += 1;
  }
};

const reset = () => {
  errorText.innerText = "";
  firstTable.forEach((item) => {
    item.innerText = "";
  });
  for (let i = 0; i < input.length; i++) {
    input[i].value = "";
  }
  count = 0;
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.dataset.value) {
      case "result":
        inputValue();
        break;
      case "reset":
        reset();
        break;
    }
  });
});
