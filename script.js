const todo = document.querySelector("#output");
const btn = document.querySelector(".btn");
let inputElement = document.getElementById("task");

btn.addEventListener("click", function (e) {
  let value = inputElement.value;
  let h2 = document.createElement("h2");
  h2.textContent = value;
  let output = document.getElementById("output");
  let tick = document.createElement("img");

  tick.setAttribute("src", "./empty.png");
  tick.setAttribute("alt", "error");

  tick.classList.add("tick");
  // tick.style.height = "30px";
  // tick.style.width = "30px";

  let newDiv = document.createElement("div");
  newDiv.classList.add("content");
  output.appendChild(newDiv);
  newDiv.appendChild(tick);
  newDiv.appendChild(h2);
  inputElement.value = "";
});
output.addEventListener("click", function (e) {
  if (e.target.classList.contains("tick")) {
    // console.log("hello world");
    e.target.setAttribute("src", "./checkbox.png");
  }
});
