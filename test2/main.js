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
$("#totalRows").change(function(){
	totalRows = parseInt($("#totalRows").val());
	if(totalRows<parseInt($("#startRows").val())){
		alert("Total rows can't be less than starting row");
	}
	$(".data").remove();
	populate();
});

$("#startRows").change(function(){
	prevStartingIndex = startingIndex;
	startingIndex = parseInt($("#startRows").val());
	if(prevStartingIndex<startingIndex){
		for(var i=startingIndex-prevStartingIndex;i>0;i--){
			$(".data").first().remove();
			$("table").append("<tr class='data'><td class='firstcell'></td><td class='secondcell'></td><td class='thirdcell'></td><td class='fourthcell'></td><td class='fifthcell'></td></tr>");	
		}

		firstCell = document.querySelectorAll(".firstcell");
		secondCell = document.querySelectorAll(".secondcell");
		thirdCell = document.querySelectorAll(".thirdcell");
		fourthCell = document.querySelectorAll(".fourthcell");
		fifthCell = document.querySelectorAll(".fifthcell");

		for(var j=noOfRows-startingIndex+1;j<noOfRows;j++){
			if(j>totalRows-1)break;
			if(secondCell[j] == undefined || thirdCell[j] == undefined || fourthCell[j] == undefined || fifthCell[j] == undefined){
				break;
			}
			else{
				m.render(firstCell[j+1],j+startingIndex-prevStartingIndex+1);
				m.render(secondCell[j+1],Locn[j+startingIndex-prevStartingIndex]);
				m.render(thirdCell[j+1],OrdId[j+startingIndex-prevStartingIndex]);
				m.render(fourthCell[j+1],KsnId[j+startingIndex-prevStartingIndex]);
				m.render(fifthCell[j+1],SkuCd[j+startingIndex-prevStartingIndex]);
			}
		}
			
	}
	else{
		for(var i=prevStartingIndex-startingIndex;i>0;i--){
			var row = "<tr class='data'><td class='firstcell'></td><td class='secondcell'></td><td class='thirdcell'></td><td class='fourthcell'></td><td class='fifthcell'></td></tr>";
			$(row).insertAfter(".tr1");
			$(".data").last().remove();
		}	

		firstCell = document.querySelectorAll(".firstcell");
		secondCell = document.querySelectorAll(".secondcell");
		thirdCell = document.querySelectorAll(".thirdcell");
		fourthCell = document.querySelectorAll(".fourthcell");
		fifthCell = document.querySelectorAll(".fifthcell");

		for(var j=prevStartingIndex-startingIndex;j>0;j--){
			// if(j>totalRows-1)break;
			if(secondCell[j] == undefined || thirdCell[j] == undefined || fourthCell[j] == undefined || fifthCell[j] == undefined){
				break;
			}
			else{
				m.render(firstCell[j],j+startingIndex-1);
				m.render(secondCell[j],Locn[j+startingIndex-2]);
				m.render(thirdCell[j],OrdId[j+startingIndex-2]);
				m.render(fourthCell[j],KsnId[j+startingIndex-2]);
				m.render(fifthCell[j],SkuCd[j+startingIndex-2]);
			}
		}

	}
	
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