var squares = document.getElementsByClassName("square");
var noOfSquares = squares.length;
var correctSquareNumber = Math.floor(noOfSquares*Math.random());
var correctRGBval = [];
var correctRGBvalS = "";
var messageDisplay = document.querySelector("#message");
var newGame = document.querySelector("#newcolors");
var header = document.querySelector("h1");
var easyBtn = document.querySelector("#easyButton");
var hardBtn = document.querySelector("#hardButton");

easyBtn.addEventListener("click",function(){
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	noOfSquares = 3;
	var sq = document.getElementsByClassName("down");
	sq[0].style.display= "none";
	sq[1].style.display= "none";
	sq[2].style.display= "none";
	correctSquareNumber = Math.floor(noOfSquares*Math.random());
	messageDisplay.textContent = "";
	header.style.backgroundColor = "steelblue";
	setSquareColors();
	setTargetRGB();
	action();
});
hardBtn.addEventListener("click",function(){
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	noOfSquares = 6;
	var sq = document.getElementsByClassName("down");
	sq[0].style.display= "inline";
	sq[1].style.display= "inline";
	sq[2].style.display= "inline";
	correctSquareNumber = Math.floor(noOfSquares*Math.random());
	messageDisplay.textContent = "";
	header.style.backgroundColor = "steelblue";
	setSquareColors();
	setTargetRGB();
	action();
});


newGame.addEventListener("click",function(){
	this.textContent = "New Colors";
	header.style.backgroundColor = "steelblue";
	correctSquareNumber = Math.floor(noOfSquares*Math.random());
	messageDisplay.textContent = "";
	setSquareColors();
	setTargetRGB();
	action();
});

function setSquareColors(){
	for(var i=0;i<noOfSquares;i++){
		var r = Math.floor(256*Math.random());
		var g = Math.floor(256*Math.random());
		var b = Math.floor(256*Math.random());

		squares[i].style.backgroundColor = "rgb("+r+","+g+","+b+")";
		if(i===correctSquareNumber){
			correctRGBval = [r,g,b];
			correctRGBvalS = "rgb("+r+", "+g+", "+b+")"
		}
	}	
}

function setTargetRGB(){
	//Set target rgb values at the top
	document.querySelector(".rval").textContent = correctRGBval[0];
	document.querySelector(".gval").textContent = correctRGBval[1];
	document.querySelector(".bval").textContent = correctRGBval[2];	
}

function action(){

	for(var i=0;i<noOfSquares;i++){
		squares[i].addEventListener("click",function(){	
			if(this.style.backgroundColor==correctRGBvalS){
				messageDisplay.textContent = "Correct!";
				newGame.textContent = "Play Again";
				matchColors();
				new Audio('tada.mp3').play();
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
				new Audio('click.mp3').play();
			}

		});
	}
}

function matchColors(){
	for(var i=0;i<noOfSquares;i++){
		squares[i].style.backgroundColor = "rgb("+correctRGBval[0]+","+correctRGBval[1]+","+correctRGBval[2]+")";
		header.style.backgroundColor = "rgb("+correctRGBval[0]+","+correctRGBval[1]+","+correctRGBval[2]+")";
	}
}


setSquareColors();
setTargetRGB();
action();
