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

  // this div is  created to delete the newDiv list content at one go
  let del = document.createElement("div");
  del.classList.add("delete");
  let cross = document.createElement("img");
  cross.classList.add("cut");
  cross.setAttribute("src", "./bin.png");
  cross.setAttribute("alt", "error");

  let newDiv = document.createElement("div");
  newDiv.classList.add("content");
  output.appendChild(newDiv);
  // here we append the del name div into output span...and no we will add img into this div

  del.appendChild(cross);
  newDiv.appendChild(tick);
  newDiv.appendChild(h2);
  newDiv.appendChild(del);
  inputElement.value = "";

  // cross.addEventListener("click", function (e) {
  //   console.log(e.target.parentNode.parentNode);

  //   let divtoremove = document.querySelector(".content");
  //   console.log(divtoremove);
  //   divtoremove.remove();
  // });
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
  } else if (e.target.classList.contains("cut")) {
    console.log(e.target.parentNode.parentNode);
    let divtoremove = e.target.parentNode.parentNode;
    divtoremove.remove();
  }
});
