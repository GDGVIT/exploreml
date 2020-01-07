$(".question").on('click',function(){
	$(this).children('.answer').slideToggle();
	$('.fa-chevron-up',this).toggleClass('hideFont');
	$('.fa-chevron-down',this).toggleClass('hideFont');
})