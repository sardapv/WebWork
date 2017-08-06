var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 =document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeList = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();

}
function setupModeButtons(){
	for (var i = 0; i < modeList.length; i++) {
		modeList[i].addEventListener("click",function(){
			modeList[0].classList.remove("selected");
			modeList[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
			reset();
			//figure out how many colors to show
			//pick new colors
			//pick a new pickedcolor
			//update page to reflect changes
		}
		)}	
}
function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
		//add initial colors
		squares[i].style.backgroundColor = colors[i];
		//add clicklisteners
		squares[i].addEventListener("click",function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare with picked color
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "!! Correct !!";
				changeColors(pickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?"
					//	alert("Correct");
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
				//	alert("Wrong");
			}
		});
	}
}

function reset(){
	resetButton.textContent="new colors"
		//generate all new colors
		colors = generateRandomColors(numberOfSquares);
	//pick a new random color
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";
	}
	h1.style.backgroundColor = "steelblue";
	colorDisplay.style.color = "yellow";
	messageDisplay.textContent = "";
}

function changeColors(color){//to set new colors when array changes
	//loop through all square
	for (var i = 0; i <squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	//match with correct one
}
function pickColor(){
	var random  = Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for (var i = 0; i <num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return array
	return arr;
}
function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a green from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")"
}
resetButton.addEventListener("click",function(){
	reset();
});


// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	messageDisplay.textContent = "";
// 	resetButton.textContent="new colors"
// 	numberOfSquares = 3;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	messageDisplay.textContent = "";
// 	resetButton.textContent="new colors"
// 	numberOfSquares = 6;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 			squares[i].style.backgroundColor = colors[i];
// 			if(squares[i].style.display === "none")
// 				squares[i].style.display = "block";
// 	}
// });

// for (var i = 0; i < squares.length; i++) {
// 	//add initial colors
// 	squares[i].style.backgroundColor = colors[i];
// 	//add clicklisteners
// 	squares[i].addEventListener("click",function(){
// 		//grab color of clicked square
// 		var clickedColor = this.style.backgroundColor;
// 		//compare with picked color
// 		if (clickedColor === pickedColor) {
// 		messageDisplay.textContent = "!! Correct !!";
// 		changeColors(pickedColor);
// 		h1.style.backgroundColor = clickedColor;
// 		resetButton.textContent = "Play Again?"
// 		//	alert("Correct");
// 		}
// 		else{
// 			this.style.backgroundColor = "#232323";
// 			messageDisplay.textContent = "Try Again!";
// 		//	alert("Wrong");
// 		}
// 	});
// }







