var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")

function setGradient(){
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}
// "input" - event listener -- Triggers when the input value is changed
color1.addEventListener("input",setGradient)
// setGradient withput "()" - a callback function that is not automatically called, called only when event is triggered
color2.addEventListener("input",setGradient)