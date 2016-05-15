(function($){
  $(function(){

    $('.button-collapse').sideNav();
  	
    $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
		// Pause slider
		$('.slider').slider('pause');
		// Start slider
		$('.slider').slider('start');
		// Next slide
		$('.slider').slider('next');
		// Previous slide
		$('.slider').slider('prev');

    $(".dropdown-button").dropdown();

$(function() {
 $('.smoothScroll').click(function() {
   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     if (target.length) {
       $('html,body').animate({
         scrollTop: target.offset().top
       }, 800); // The number here represents the speed of the scroll in milliseconds
       return false;
     }
   }
 });
});

 $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

     $(document).ready(function(){
      $('.parallax').parallax();
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space