var chance = 1;
var matrix = [[-1,8,10],[-16,-15,-14],[-13,-12,-11]];
var wonGame = 0;
var totalTurns = 0;

var tab = "";



$("td").on("click",function(){
	totalTurns++;
	if(wonGame)return;
	if(chance == 1){
		$(this).append("<img src='cross.jpg'>");
		tab = $(this).attr("id");
		console.log(tab);
		if(tab=="a")matrix[0][0] = 1;
		else if(tab=="b")matrix[0][1] = 1;
		else if(tab=="c")matrix[0][2] = 1;
		else if(tab=="d")matrix[1][0] = 1;
		else if(tab=="e")matrix[1][1] = 1;
		else if(tab=="f")matrix[1][2] = 1;
		else if(tab=="g")matrix[2][0] = 1;
		else if(tab=="h")matrix[2][1] = 1;
		else matrix[2][2] = 1;
		if(check()==1){
			wonGame = 1;
			$("body").append("<div id='wonDisplay'>Player1 Won the game!</div>");
			$("#p2state").toggleClass("mutedisplay");	
		}		
	}
	else{
		$(this).append("<img src='zero.jpg'>");
		tab = $(this).attr("id");
		if(tab=="a")matrix[0][0] = 0;
		else if(tab=="b")matrix[0][1] = 0;
		else if(tab=="c")matrix[0][2] = 0;
		else if(tab=="d")matrix[1][0] = 0;
		else if(tab=="e")matrix[1][1] = 0;
		else if(tab=="f")matrix[1][2] = 0;
		else if(tab=="g")matrix[2][0] = 0;
		else if(tab=="h")matrix[2][1] = 0;
		else matrix[2][2] = 0;
		if(check()==1){
			wonGame = 1;
			$("body").append("<div id='wonDisplay'>Player2 Won the game!</div>");
			$("#p1state").toggleClass("mutedisplay");
		}	
	}
	$("#p2state").toggleClass("mutedisplay");
	$("#p1state").toggleClass("mutedisplay");
	chance = !chance;
	if(totalTurns==9){
		console.log("Draw");
	}
});

function check(){
	var win =-1;
	if(matrix[0][0] == matrix[0][1] && matrix[0][0] == matrix[0][2]){
		win=1;
	}
	else if(matrix[1][0] == matrix[1][1] && matrix[1][0] == matrix[1][2]){
		win=1;
	}
	else if(matrix[2][0] == matrix[2][1] && matrix[2][0] == matrix[2][2]){
		win=1;
	}
	else if(matrix[0][0] == matrix[1][0] && matrix[0][0] == matrix[2][0]){
		win=1;
	}
	else if(matrix[0][1] == matrix[1][1] && matrix[0][1] == matrix[2][1]){
		win=1;
	}
	else if(matrix[0][2] == matrix[1][2] && matrix[0][2] == matrix[2][2]){
		win=1;
	}
	else if(matrix[0][2] == matrix[1][1] && matrix[0][2] == matrix[2][0]){
		win=1;
	}
	else if(matrix[0][0] == matrix[1][1] && matrix[0][0] == matrix[2][2]){
		win=1;
	}
	return win;
}