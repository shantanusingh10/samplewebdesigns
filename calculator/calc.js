var currDisplay = "";
var res = 0;
var clear = false;
var currResult = 0;
var prevResult = null;
var chain = false;
var validStart = false;
var equated = false;
var op = -1;
var textArea = document.getElementById("input-text");

document.getElementById("AC").addEventListener("click",function(){
	currDisplay = "";
	res = 0;
	clear = false;
	currResult = 0;
	prevResult = null;
	chain = false;
	validStart = false;
	equated = false;
	op = -1;
	textArea.innerText = 0;
});
document.getElementById("Clear").addEventListener("click",function(){
	textArea.innerText = 0;
	currDisplay = "0";	
});
document.getElementById("nine").addEventListener("click",function(){
	if(clear || currDisplay=="0"){
		currDisplay = "";
		clear = false;
	}
	validStart = true;
	currDisplay+=9;
	if(currDisplay.length > 12){
		alert("Maximum length reached!");
		return;
	}
	textArea.innerText = currDisplay;
});

document.getElementById("eight").addEventListener("click",function(){
	if(clear || currDisplay=="0"){
		currDisplay = "";
		clear = false;
	}
	validStart = true;
	currDisplay+=8;
	if(currDisplay.length > 12){
		alert("Maximum length reached!");
		return;
	}
	textArea.innerText = currDisplay;
});
document.getElementById("seven").addEventListener("click",function(){
	if(clear || currDisplay=="0"){
		currDisplay = "";
		clear = false;
	}
	validStart = true;
	currDisplay+=7;
	if(currDisplay.length > 12){
		alert("Maximum length reached!");
		return;
	}
	textArea.innerText = currDisplay;
});
document.getElementById("six").addEventListener("click",function(){
	if(clear || currDisplay=="0"){
		currDisplay = "";
		clear = false;
	}
	validStart = true;
	currDisplay+=6;
	if(currDisplay.length > 12){
		alert("Maximum length reached!");
		return;
	}
	textArea.innerText = currDisplay;
});
document.getElementById("five").addEventListener("click",function(){
	if(clear || currDisplay=="0"){
		currDisplay = "";
		clear = false;
	}
	validStart = true;
	currDisplay+=5;
	if(currDisplay.length > 12){
		alert("Maximum length reached!");
		return;
	}
	textArea.innerText = currDisplay;
});
document.getElementById("four").addEventListener("click",function(){
	if(clear || currDisplay=="0"){
		currDisplay = "";
		clear = false;
	}
	validStart = true;
	currDisplay+=4;
	if(currDisplay.length > 12){
		alert("Maximum length reached!");
		return;
	}
	textArea.innerText = currDisplay;
});
document.getElementById("three").addEventListener("click",function(){
	if(clear || currDisplay=="0"){
		currDisplay = "";
		clear = false;
	}
	validStart = true;
	currDisplay+=3;
	if(currDisplay.length > 12){
		alert("Maximum length reached!");
		return;
	}
	textArea.innerText = currDisplay;
});
document.getElementById("two").addEventListener("click",function(){
	if(clear || currDisplay=="0"){
		currDisplay = "";
		clear = false;
	}
	validStart = true;
	currDisplay+=2;
	if(currDisplay.length > 12){
		alert("Maximum length reached!");
		return;
	}
	textArea.innerText = currDisplay;
});
document.getElementById("one").addEventListener("click",function(){
	if(clear || currDisplay=="0"){
		currDisplay = "";
		clear = false;
	}
	validStart = true;
	currDisplay+=1;
	if(currDisplay.length > 12){
		alert("Maximum length reached!");
		return;
	}
	textArea.innerText = currDisplay;
});
document.getElementById("decimal").addEventListener("click",function(){
	if(clear){
		currDisplay = "";
		clear = false;
	}
	currDisplay+=".";
	textArea.innerText = currDisplay;
});
document.getElementById("zero-btn").addEventListener("click",function(){
	if(clear){
		currDisplay = "";
		clear = false;
	}
	currDisplay+="0";
	textArea.innerText = currDisplay;
});


document.getElementById("plus").addEventListener("click",function(){
	if(!validStart)return;
	if(prevResult!=null && !equated){
		if(op==1){
			prevResult += parseFloat(currDisplay);	
		}
		else if(op==2){
			prevResult -= parseFloat(currDisplay);	
		}
		else if(op==3){
			prevResult /= parseFloat(currDisplay);	
		}
		else{
			prevResult *= parseFloat(currDisplay);	
		}
	}
	else{
		prevResult = parseFloat(currDisplay);	
	}
	currDisplay = "+";
	op = 1;  //one for plus
	clear = true;
	textArea.innerText = currDisplay;
});
document.getElementById("minus").addEventListener("click",function(){
	if(!validStart)return;
	if(prevResult!=null && !equated){
		if(op==1){
			prevResult += parseFloat(currDisplay);	
		}
		else if(op==2){
			prevResult -= parseFloat(currDisplay);	
		}
		else if(op==3){
			prevResult /= parseFloat(currDisplay);	
		}
		else{
			prevResult *= parseFloat(currDisplay);	
		}
	}
	else{
		prevResult = parseFloat(currDisplay);	
	}
	prevResult = parseFloat(currDisplay);
	currDisplay = "-";
	op = 2;  //one for plus
	clear = true;
	textArea.innerText = currDisplay;
});
document.getElementById("divide").addEventListener("click",function(){
	if(!validStart)return;
	if(prevResult!=null && !equated){
		if(op==1){
			prevResult += parseFloat(currDisplay);	
		}
		else if(op==2){
			prevResult -= parseFloat(currDisplay);	
		}
		else if(op==3){
			prevResult /= parseFloat(currDisplay);	
		}
		else{
			prevResult *= parseFloat(currDisplay);	
		}
	}
	else{
		prevResult = parseFloat(currDisplay);	
	}
	currDisplay = "/";
	op = 3;  //one for plus
	clear = true;
	textArea.innerText = currDisplay;
});
document.getElementById("multiply").addEventListener("click",function(){
	if(!validStart)return;
	if(prevResult!=null && !equated){
		if(op==1){
			prevResult += parseFloat(currDisplay);	
		}
		else if(op==2){
			prevResult -= parseFloat(currDisplay);	
		}
		else if(op==3){
			prevResult /= parseFloat(currDisplay);	
		}
		else{
			prevResult *= parseFloat(currDisplay);	
		}
	}
	else{
		prevResult = parseFloat(currDisplay);	
	}
	currDisplay = "X";
	op = 4;  //one for plus
	clear = true;
	textArea.innerText = currDisplay;
});

document.getElementById("equal-btn").addEventListener("click",function(){
	if(prevResult==null || clear)return;
	if(prevResult!=null){
		if(op==1){
			prevResult += parseFloat(currDisplay);	
		}
		else if(op==2){
			prevResult -= parseFloat(currDisplay);	
		}
		else if(op==3){
			prevResult /= parseFloat(currDisplay);	
		}
		else{
			prevResult *= parseFloat(currDisplay);	
		}
	}
	equated = true;
	currDisplay = prevResult.toString();
	if(currDisplay.length > 12){
		alert("Maximum length reached!");
		return;
	}
	textArea.innerText = currDisplay;	
});