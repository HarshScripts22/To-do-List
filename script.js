const todo = document.querySelector(".main");
const btn = document.querySelector(".btn");
let inputElement = document.getElementById("task");
btn.addEventListener("click", function (e) {
  let value = inputElement.value;
  let output = document.getElementById("output");
  output.innerHTML = `<h2>${value}</h2>`;
});
