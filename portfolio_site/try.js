//Fade in projects
$(document).ready(function(){
	$(".thumbnail").fadeIn(2400);
});
$('a').hover(
   function() {
         $(this).find('img').fadeTo('slow', 0.5);
  },
   function() {
         $(this).find('img').fadeTo('slow', 1);
  }
);