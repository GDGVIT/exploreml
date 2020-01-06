$(".question").on("click",function(){
	$(this).children(".answer").slideToggle();
	$(".fa-chevron-up",this).toggleClass("hideUp");
	$(".fa-chevron-down",this).toggleClass("hideUp");

})