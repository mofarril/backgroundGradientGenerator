var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector(".random");
var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
var randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
//remember: body.style.background = "red"; 

function setGradient() {
	body.style.background="linear-gradient(to right, " +
	color1.value +
	", " +
	color2.value +
	")";

	css.textContent = body.style.background + ";";
}

function generateRandomColor()
{
	color1.value = randomColor;
	color2.value = randomColor2;
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", generateRandomColor);
