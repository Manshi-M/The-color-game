var numSquares = 6;
var colors = [];	
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var resetButton = document.getElementById("reset");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click",function(){
	reset();
});

function init(){
	setupModeButtons();
	setupSquares();
	reset();	
}
function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy"? numSquares = 3: numSquares = 6;
			reset();
		});
	}
	
}
function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click",function(){
			var clickedColor= this.style.backgroundColor;
			if(clickedColor === pickedColor)
			{
				changeColors(clickedColor);
				messageDisplay.textContent = "Correct!";
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play again?"
			}
			else
			{
				messageDisplay.textContent = "Try Again!";
				this.style.backgroundColor = "#232323";
			}
		});
	}

}
function reset(){
	h1.style.backgroundColor = "steelblue";	
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i])
		{
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else
			squares[i].style.display= "none";
	}
}
function changeColors(color){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", "+ g + ", "+ b + ")" ;
}
