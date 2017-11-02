var active = false;
var strict = false;
var count = 0;
var currBtns = [];
var playNow = false;
var currBtnIndex = 0;
var s;
var x;

function resetRandom(){
	active = false;
	count = 0;
	currBtns = [];
	playNow = false;
	currBtnIndex = 0;
	clearInterval(s);
	s = null;
	x = null;
	$("color-btn").off();
	var rand = Math.floor(Math.random()*20)-1;
	count = rand;
	for(var i=0;i<rand;i++){
		currBtns.push(Math.floor(Math.random()*4));
	}
	play();
}

function reset(){
	active = false;
	count = 0;
	currBtns = [];
	playNow = false;
	currBtnIndex = 0;
	clearInterval(s);
	s = null;
	x = null;
	$("color-btn").off();
}

$("#checkbox").change(function() {
    if(this.checked) {
        strict = true;
        reset();
        $("#play-btn").text("Play!");
    	$("#count").html("  &nbsp; " + count + " &nbsp; ");    
    }
    else{
    	strict = false;
        reset();
        $("#play-btn").text("Play!");
    	$("#count").html("  &nbsp; " + count + " &nbsp; ");	
    }
});

$("#play-btn").on("click",function(){
	if(!active)active = true;
	else {
		reset();
	}
	$("#play-btn").text("Reset!");
	count++;
	$("#count").html("  &nbsp; " + count + " &nbsp; ");
	play();
});

function rerun(){
	$(".color-btn").off();
	x = 0;
	s = setInterval(setPlay,800);
}

function play(){
	if(count==21){
		$("#disp").text("You've won the game");
		new Audio("tada.mp3").play();
		reset();
		play();
		return;
	}
	$("#count").html("  &nbsp; " + count + " &nbsp; ");
	$(".color-btn").off();
	currBtns.push(Math.floor((Math.random()*4)));
	console.log(currBtns);
	x = 0;
	s = setInterval(setPlay,800);
}

function clearPrevColor(){
	if(currBtns[currBtnIndex-1]==0){
		$("#blue").removeClass("light-blue");
		$("#blue").addClass("blue");
	}
	else if(currBtns[currBtnIndex-1]==1){
		$("#green").removeClass("light-green");
		$("#green").addClass("green");
	}
	else if(currBtns[currBtnIndex-1]==2){
		$("#yellow").removeClass("light-yellow");
		$("#yellow").addClass("yellow");
	}
	else{
		$("#red").removeClass("light-red");
		$("#red").addClass("red");
	}	
}

function highlightColors(){
	if(currBtns[currBtnIndex]==0){
		$("#blue").removeClass("blue");
		$("#blue").addClass("light-blue");
		new Audio('simon-blue.mp3').play();
	}
	else if(currBtns[currBtnIndex]==1){
		$("#green").removeClass("green");
		$("#green").addClass("light-green");
		new Audio('simon-green.mp3').play();
	}
	else if(currBtns[currBtnIndex]==2){
		$("#yellow").removeClass("yellow");
		$("#yellow").addClass("light-yellow");
		new Audio('simon-yellow.mp3').play();
	}
	else{
		$("#red").removeClass("red");
		$("#red").addClass("light-red");
		new Audio('simon-red.mp3').play();
	}
}

function setPlay(){
	x++;
	if(currBtnIndex>=count){
		clearPrevColor();
		clearInterval(s);
		playNow = true;
		pressPlay();
		return;
	}
	if(currBtnIndex!=0){
		clearPrevColor();
	}
	if(x%2==1){
		highlightColors();
		currBtnIndex++;	
	}
	else{
		console.log("HiH");
		return;
	}
	
}

function pressPlay(){
	var currPressIndex = 0;
		$("#blue").on("click",function(){
			if(!playNow)return;
			if(currBtns[currPressIndex]!=0){
				//wrong
				new Audio("click.mp3");
				if(!strict)$("#disp").text("Wrong input! See again");
				else {
					$("#disp").text("You lost! try again");
					reset();
					$("#play-btn").text("Play!");
 				   	$("#count").html("  &nbsp; " + count + " &nbsp; ");
				}
				currBtnIndex = 0;
				resetRandom();
				return;
			}
			else{
				//right
				$("#disp").text("Right !");
				new Audio('simon-blue.mp3').play();
				currPressIndex++;
				if(currPressIndex>=count){
					count++;
					currBtnIndex = 0;
					play();
					return;
				}
			}
		});
		$("#green").on("click",function(){
			if(!playNow)return;
			if(currBtns[currPressIndex]!=1){
				//wrong
				new Audio("click.mp3");
				if(!strict)$("#disp").text("Wrong input! See again");
				else {
					$("#disp").text("You lost! try again");
					reset();
					$("#play-btn").text("Play!");
 				   	$("#count").html("  &nbsp; " + count + " &nbsp; ");
				}
				currBtnIndex = 0;
				resetRandom();
				return;
			}
			else{
				//right
				$("#disp").text("Right !");
				new Audio('simon-green.mp3').play();
				currPressIndex++;
				if(currPressIndex>=count){
					count++;
					currBtnIndex = 0;
					play();
					return;
				}	
			}
		});
		$("#yellow").on("click",function(){
			if(!playNow)return;
			if(currBtns[currPressIndex]!=2){
				//wrong
				new Audio("click.mp3");
				if(!strict)$("#disp").text("Wrong input! See again");
				else {
					$("#disp").text("You lost! try again");
					resetRandom();
					$("#play-btn").text("Play!");
 				   	$("#count").html("  &nbsp; " + count + " &nbsp; ");
				}
				currBtnIndex = 0;
				rerun();
				return;
			}
			else{
				//right
				$("#disp").text("Right !");
				new Audio('simon-yellow.mp3').play();
				currPressIndex++;
				if(currPressIndex>=count){
					count++;
					currBtnIndex = 0;
					play();
					return;
				}
			}
		});
		$("#red").on("click",function(){
			if(!playNow)return;
			if(currBtns[currPressIndex]!=3){
				//wrong
				new Audio("click.mp3");
				if(!strict)$("#disp").text("Wrong input! See again");
				else {
					$("#disp").text("You lost! try again");
					resetRandom();
					$("#play-btn").text("Play!");
  				  	$("#count").html("  &nbsp; " + count + " &nbsp; ");
				}

				currBtnIndex = 0;
				rerun();
				return;
			}
			else{
				//right
				$("#disp").text("Right !");
				new Audio('simon-red.mp3').play();
				currPressIndex++;
				if(currPressIndex>=count){
					count++;
					currBtnIndex = 0;
					play();
					return;
				}
			}
		});
}