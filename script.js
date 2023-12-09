const todo = document.querySelector("#output");
const btn = document.querySelector(".btn");
let inputElement = document.getElementById("task");

btn.addEventListener("click", function (e) {
  let value = inputElement.value;
  let h2 = document.createElement("h2");
  h2.textContent = value;
  let output = document.getElementById("output");
  let tick = document.createElement("img");

  tick.setAttribute("src", "./checkbox.png");
  tick.setAttribute("alt", "error");

  tick.style.height = "40px";
  tick.style.width = "40px";

  output.appendChild(tick);
  output.appendChild(h2);
  inputElement.value = "";
});
