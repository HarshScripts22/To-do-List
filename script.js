const todo = document.querySelector("#output");
const btn = document.querySelector(".btn");
let inputElement = document.getElementById("task");

btn.addEventListener("click", function (e) {
  let value = inputElement.value;
  let h2 = document.createElement("h2");

  h2.textContent = value;
  h2.id = "heading";
  let output = document.getElementById("output");
  let tick = document.createElement("img");

  tick.setAttribute("src", "./empty.png");
  tick.setAttribute("alt", "error");

  tick.classList.add("tick");

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
    let y = e.target.parentNode;
    y.childNodes[1].style.textDecoration = "none";
  } else if (e.target.classList.contains("tick")) {
    console.log("hello world");
    e.target.setAttribute("src", "./checkbox.png");
    e.target.classList.add("untick");
    console.log(e.target);
    let y = e.target.parentNode;
    y.childNodes[1].style.textDecoration = "line-through";
  }
});
