function displayDate() {
  document.getElementById("tmin").innerHTML = Date();
}
local.addEventListener("click", displayDate);

function myFunction() {
  confirm("Yay Time-zone Friends!");
}

function myFunctions() {
  confirm("Darn! I hope you have a good time... zone ;)");
}

let name = document.getElementById("recommendation");
let button = document.getElementById("button");

function giveMe() {
  name.innerHTML = prompt("Provide a movie or show recommendation?");
}

button.addEventListener("click", giveMe);
