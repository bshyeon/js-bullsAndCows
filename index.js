const input = document.querySelectorAll("input");
const resultBtn = document.querySelector(".resultBtn");
const firstTable = document.querySelectorAll("td")[1];

const tableValue = () => {
  input.forEach((text) => {
    firstTable.innerText += text.value;
    text.value = "";
  });
};
console.log(firstTable);

resultBtn.addEventListener("click", tableValue);
