$(function() {
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    items:1,
	    dots:false,
	});
	$(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();
	    if(scroll > 10){
	    	$( "body" ).addClass("inverse");
	    }else{
	    	$( "body" ).removeClass("inverse");
	    }
	});
});

function clickBurger(){
	$( ".menuMobile" ).slideToggle();
}