var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var range = document.querySelector("input");
var	reset = document.querySelector("#reset");
var statement = document.querySelector("#statement");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var iswinner1 = false;
var iswinner2 = false;
var max = Number(range.value);
p1Button.addEventListener("click",function(){
	if(p1score<max && gameOver === false){
	p1score++;
	document.querySelector("#h11").textContent = p1score;
	}
	else if(p1score === max) {
		document.querySelector("#h11").style.color = "green";
		gameOver = true;
	}
});

p2Button.addEventListener("click",function(){
	if(p2score<max && gameOver === false){
	p2score++;
	document.querySelector("#h12").textContent = p2score;
	}
	else if(p2score === max){
		document.querySelector("#h12").style.color = "green";
		gameOver = true;
	}
});
reset.addEventListener("click",function(){
	p1score = 0;
	p2score = 0;
	document.querySelector("#h11").textContent = p1score;
	document.querySelector("#h12").textContent = p2score;
	document.querySelector("#h11").style.color = "black";
	document.querySelector("#h12").style.color = "black";
	gameOver = false;
	max = 0;

});
range.addEventListener("change",function(){
	statement.textContent = range.value;
	max = Number(range.value);
});

if(gameOver === true){
	document.querySelector("#statement").textContent = "GAME OVER";
}