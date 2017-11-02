var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="

$("input[type='text']").keypress(function(event){
	$(".description").remove();
	$(".adesc").remove();
	if(event.which === 13){
		var searchValue = $(this).val();
		console.log(searchValue);
		searchValue.replace(" ","%20");
		$.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=" + searchValue, function(data){
			console.log(data);
			for (var i=0;i<data.query.search.length;i++){
				var str = 'https://en.wikipedia.org/?curid=' + data.query.search[i].pageid; 
				$("#input-area").append("<a class='adesc' target='_blank' href=" + str + "><div class='description'>" + "<p>" + data.query.search[i].title + "</p>" + data.query.search[i].snippet + "..." + "</div></a>");
			}
			
		});
	}
});