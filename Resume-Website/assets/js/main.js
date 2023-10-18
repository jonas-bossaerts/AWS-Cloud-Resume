jQuery(document).ready(function($) {


	var mastheadheight = $('.ds-header').outerHeight();
	//console.log(mastheadheight);
	$(".ds-banner,.ds-main-section").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.ds-header').addClass('ds-fixed-header');
	    }
	    else {
	        $('.ds-header').removeClass('ds-fixed-header');
	    }
	}).scroll();
});

var typed = new Typed('#typed', {
    strings: [
        'I am a Cloud Engineer',
        'I am a Cloud Architect',
        'I am a DevOps Engineer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});