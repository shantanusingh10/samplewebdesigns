var startingIndex = 1;
var noOfRows = 10;
var totalRows = 100;

var secondCell = [];
var thirdCell = [];
var fourthCell = [];
var fifthCell = [];

var Locn = [];
var OrdId = [];
var KsnId = [];
var SkuCd = [];

for(var i=0;i<1000000;i++){
	Locn.push(Math.floor(10000*Math.random()));
	OrdId.push(Math.floor(10000*Math.random()));
	KsnId.push(Math.floor(10000*Math.random()));
	SkuCd.push(Math.floor(10000*Math.random()));
}

populate();

$("#numRows").change(function(){
	noOfRows = parseInt($("#numRows").val());
	$(".data").remove();
	populate();
});

$("#startRows").change(function(){
	startingIndex = parseInt($("#startRows").val());
	$(".data").remove();
	populate();
});
$("#totalRows").change(function(){
	totalRows = parseInt($("#totalRows").val());
	if(totalRows<parseInt($("#startRows").val())){
		alert("Total rows can't be less than starting row");
	}
	$(".data").remove();
	populate();
});

function populate(){
	for(var i=startingIndex-1;i<noOfRows+startingIndex-1;i++){
		if(i>totalRows-1)break;	
		$("table").append("<tr class='data'><td class='firstcell'></td><td class='secondcell'></td><td class='thirdcell'></td><td class='fourthcell'></td><td class='fifthcell'></td></tr>");	
		
	}
	firstCell = document.querySelectorAll(".firstcell");
	secondCell = document.querySelectorAll(".secondcell");
	thirdCell = document.querySelectorAll(".thirdcell");
	fourthCell = document.querySelectorAll(".fourthcell");
	fifthCell = document.querySelectorAll(".fifthcell");

	for(var i=startingIndex-1,j=1;i<noOfRows+startingIndex-1;i++,j++){
		if(i>totalRows-1)break;
		if(secondCell[j] == undefined || thirdCell[j] == undefined || fourthCell[j] == undefined || fifthCell[j] == undefined){
			break;
		}
		else{
			m.render(firstCell[j],i+1);
			m.render(secondCell[j],Locn[i]);
			m.render(thirdCell[j],OrdId[i]);
			m.render(fourthCell[j],KsnId[i]);
			m.render(fifthCell[j],SkuCd[i]);
		}
	}
}
$("#nextrow").on("click",function(){
	if(startingIndex>=totalRows)return;
	startingIndex++;
	$("#startRows").val(startingIndex);
	$(".data").first().remove();
	$("table").append("<tr class='data'><td class='firstcell'></td><td class='secondcell'></td><td class='thirdcell'></td><td class='fourthcell'></td><td class='fifthcell'></td></tr>");

	firstCell = document.querySelectorAll(".firstcell");
	secondCell = document.querySelectorAll(".secondcell");
	thirdCell = document.querySelectorAll(".thirdcell");
	fourthCell = document.querySelectorAll(".fourthcell");
	fifthCell = document.querySelectorAll(".fifthcell");
	m.render(firstCell[noOfRows],startingIndex+noOfRows-1);
	m.render(secondCell[noOfRows],Locn[startingIndex+noOfRows-1]);
	m.render(thirdCell[noOfRows],OrdId[startingIndex+noOfRows-1]);
	m.render(fourthCell[noOfRows],KsnId[startingIndex+noOfRows-1]);
	m.render(fifthCell[noOfRows],SkuCd[startingIndex+noOfRows-1]);
});

$("#prevrow").on("click",function(){
	if(startingIndex<=1)return;
	startingIndex--;
	$("#startRows").val(startingIndex);
	$(".data").last().remove();
	var row = "<tr class='data'><td class='firstcell'></td><td class='secondcell'></td><td class='thirdcell'></td><td class='fourthcell'></td><td class='fifthcell'></td></tr>";
	$(row).insertAfter(".tr1");

	firstCell = document.querySelectorAll(".firstcell");
	secondCell = document.querySelectorAll(".secondcell");
	thirdCell = document.querySelectorAll(".thirdcell");
	fourthCell = document.querySelectorAll(".fourthcell");
	fifthCell = document.querySelectorAll(".fifthcell");
	m.render(firstCell[1],startingIndex);
	m.render(secondCell[1],Locn[startingIndex-1]);
	m.render(thirdCell[1],OrdId[startingIndex-1]);
	m.render(fourthCell[1],KsnId[startingIndex-1]);
	m.render(fifthCell[1],SkuCd[startingIndex-1]);
});

$("#lastpage").on("click",function(){
	startingIndex = totalRows-9;
	$("#startRows").val(startingIndex);
	$(".data").remove();
	populate();
});

$("#firstpage").on("click",function(){
	startingIndex = 1;
	$("#startRows").val(startingIndex);
	$(".data").remove();
	populate();
});

$("#nextpage").on("click",function(){
	if(startingIndex<=totalRows-10)
		startingIndex+=10;
	$("#startRows").val(startingIndex);
	$(".data").remove();
	populate();
});

$("#prevpage").on("click",function(){
	if(startingIndex>=10)
		startingIndex-=10;
	else startingIndex = 1;
	$("#startRows").val(startingIndex);
	$(".data").remove();
	populate();
});