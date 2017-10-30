var time = 25;
var y = 200
var x = 2;
var initialWidth = 2;
var secs = 25*60;
var timer = null;
var innnerCircle = document.querySelector("#inner-clock");
var timeInSecs = time*60;

document.querySelector("#minus").addEventListener("click",function(){
	if(time<=1)return;
	time--;
	timeInSecs = time*60;
	document.querySelector("#display-rem-time").innerHTML = time+":00";
	document.querySelector("#time").innerHTML = "Time in minutes - " + time;
});

document.querySelector("#plus").addEventListener("click",function(){
	time++;
	timeInSecs = time*60;
	document.querySelector("#display-rem-time").innerHTML = time+":00";
	document.querySelector("#time").innerHTML = "Time in minutes - " + time;
});


document.querySelector("#start-btn").addEventListener("click",function(){
	if(timer){
		clearInterval(timer);
		initialWidth = 2;
		var widthHeightStringFormat = "width:" + "2px;" + "height:" + "2px;" + "border-radius:" +"1px;" + "margin-top:" +"99px;";
		document.querySelector("#inner-clock").setAttribute("style",widthHeightStringFormat);
		document.querySelector("#inner-clock").className = "green";
	}
	secs = time*60;
	timer = setInterval(manageTimer,1000);
	document.querySelector("#start-btn").innerText = "Reset";

});

function showTime(min,showSecs){
	document.querySelector("#display-rem-time").innerText = min+":"+showSecs;
}

function changeFill(secs){
	var delta = (y-x)/(time*60);
	initialWidth +=delta;
	var borderRadius = initialWidth/2;
	var marginTop = (y-initialWidth)/2;
	var widthHeightStringFormat = "width:" + initialWidth + "px;" + "height:" + initialWidth + "px;" + "border-radius:" + borderRadius +"px;" + "margin-top:" + marginTop +"px;";
	//because height=width as its a circle
	document.querySelector("#inner-clock").setAttribute("style",widthHeightStringFormat);
	if(secs<3*timeInSecs/4 && secs>=timeInSecs/2){
		document.querySelector("#inner-clock").className = "yellow";	
	}
	else if(secs<timeInSecs/2 && secs>=timeInSecs/4){
		document.querySelector("#inner-clock").className = "orange";
	}
	else if(secs<timeInSecs/4){
		document.querySelector("#inner-clock").className = "red";
	}
}

function manageTimer(){
	secs--;
	var min=Math.floor(secs/60);
	var showSecs = secs%60;
	changeFill(secs);
	if(showSecs<=9){
		showSecs= "0"+showSecs;
	}
	showTime(min,showSecs);
	if(secs==0){
		clearInterval(timer);
	}
}