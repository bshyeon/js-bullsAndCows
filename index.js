const input = document.querySelectorAll("input");
const buttons = document.querySelectorAll("button");
const gameResult = document.querySelector(".gameResult");
const errorText = document.querySelector(".errorText");
const firstTable = document.querySelectorAll(".first");
const secondTable = document.querySelectorAll(".second");

let count = 0;
let randomArray = new Array();
let valueArray = new Array();

const randomValue = () => {
  while (randomArray.length < 4) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomArray.indexOf(randomNumber) < 0) {
      randomArray.push(randomNumber);
    }
  }
};

const inputValue = () => {
  valueArray = [];
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
    ballAndStrike();
    count += 1;
  }
};

const reset = () => {
  randomArray = [];
  errorText.innerText = "";
  firstTable.forEach((item) => {
    item.innerText = "";
  });
  secondTable.forEach((item) => {
    item.innerText = "";
  });
  for (let i = 0; i < input.length; i++) {
    input[i].value = "";
  }
  count = 0;
};

const ballAndStrike = () => {
  console.log(valueArray);
  console.log(randomArray);
  let ball = 0;
  let strike = 0;
  for (let i = 0; i < valueArray.length; i++) {
    if (valueArray[i] === randomArray[i]) {
      strike += 1;
    } else if (
      valueArray[i] !== randomArray[i] &&
      randomArray.indexOf(valueArray[i]) >= 0
    ) {
      ball += 1;
    }
  }
  secondTable[count].innerText = `${strike}S ${ball}B`;
};

randomValue();
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.dataset.value) {
      case "result":
        inputValue();
        // 결과 표시
        break;
      case "reset":
        reset();
        break;
    }
  });
});
