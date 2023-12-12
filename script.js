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
  if (e.target.classList.contains("untick")) {
    e.target.setAttribute("src", "./empty.png");
    e.target.classList.remove("untick");
    output.style.textDecoration = "none";
  } else if (e.target.classList.contains("tick")) {
    // console.log("hello world");
    e.target.setAttribute("src", "./checkbox.png");
    e.target.classList.add("untick");
    // console.log(e.target);

    if (e.target.parentNode.parentNode == output) {
      // console.log(e.target.parentNode.parentNode);
      output.style.textDecoration = "line-through";
    }
  }
});
