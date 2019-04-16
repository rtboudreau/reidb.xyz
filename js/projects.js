document.addEventListener("DOMContentLoaded", function(event) {

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  TweenMax.staggerFrom(".devices", 0.5, {scale:0.5, opacity:0, delay:1.75, ease: Power1.easeOut}, 0.35);



  // preloader
  $(document).ready(function() {
  setTimeout(function(){
    $('body')
    .addClass('loaded') 
    .css({'overflow-y': 'scroll'});
    }, 1500);
  
  });

  //contact form add class
  $( '.js-input' ).keyup(function() {
    if( $(this).val() ) {
       $(this).addClass('not-empty');
    } else {
       $(this).removeClass('not-empty');
    }
  });

  // add dashes to phone number
   $('#form_phone').keyup(function(){
          $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/,'$1-$2-$3'))
      });

  //collapse footer
    $("#collapseOne").on("show.bs.collapse", function() {
      $("html, body").animate({ scrollTop: 999999 }, "slow");
    });

    //switch between open and close when footer is clicked
    $('.primary-link').click(function(){
      $('.switchCopy').text($('.switchCopy').text() == '[close]' ? '[open]' : '[close]');
    });

    $('.switchCopy').click(function(){
      $(this).text($(this).text() == '[close]' ? '[open]' : '[close]');
});

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict

// returns to top on reload
//window.onbeforeunload = function () {
//  window.scrollTo(0, 0);
//}

});

