$(function() {
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    items:1,
	    dots:false,
	    autoplay:true,
	    autoplayTimeout:5000,
	    autoplayHoverPause:true
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
$( ".hamburger" ).on( "click", function() {
	$( ".menuMobile" ).slideToggle();
});
$( ".menuMobile .dropdown > a" ).on( "click", function() {
  	$( this ).next("ul" ).addClass('show');
});
$( ".menuMobile .dropdown > ul > li > a.back" ).on( "click", function() {
  	$( this ).closest(".dropdown").find("ul").removeClass('show');
});
$( "span.checkbox" ).on( "click", function() {
  	$( this ).toggleClass('checked');
	if ($(this).hasClass('checked')) {
      	$("input#confirm").val(1);
   	}
   	else {
      	$("input#confirm").val(0);
   	}
});
$("form").submit(function(event) {
    event.preventDefault();
    var $form = $( this ),
        url = $form.attr( 'action' );
    if(!$( "span.checkbox" ).hasClass('checked')){
    	$( "span.checkbox" ).closest('.formInput').addClass('error');
    }else{
	    var posting = $.post( url, $form.serialize() );
	    posting.done(function( data ) {
	        $( "form" ).html("<div class=\"success\">Thank you for your message! If we are interested in your proposal, we will answer you, otherwise, unfortunately, we won’t. For vacancies and job placement, write to job@mytona.com. On issues in our games, write to: for Seekers Notes - support@mytona.com ; for Cooking Diary - support.cookingdiary@mytona.com . For cooperation matters - info@mytona.com.</div>");
	    });
    }
});