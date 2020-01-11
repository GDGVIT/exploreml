$(".question").on('click',function(){
	$(this).children('.answer').slideToggle();
	$('.fa-chevron-up',this).toggleClass('hideFont');
	$('.fa-chevron-down',this).toggleClass('hideFont');
})
$('.faqbt').on('click',function(){
	alert('Sorry we are not  accepting any Registrations now ! The seats are full.');
})