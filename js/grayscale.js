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

  // preloader
  $(document).ready(function() {
  setTimeout(function(){
    $('body')
    .addClass('loaded') 
    .css({'overflow-y': 'scroll'});
    }, 1100);
  
  });


  // rotates hero message

  $(document).ready(function() {
    var now = new Date();
    var hours = now.getHours();

      if (hours < 12){
          $(".morning").show();
          $(".afternoon").hide();
          $(".evening").hide();
      }
      else if (hours < 17){  
          $(".afternoon").show();
          $(".evening").hide();
          $(".morning").hide();
      }

      else {  
          $(".evening").show();
          $(".morning").hide();
          $(".afternoon").hide(); 
      }
    });

// GreenSock

 $(document).ready(function() {
    var brandHeading= $('.brand-heading'),
      introText = $('.intro-text'),
      tl = new TimelineLite();

    // Adding Tweens To A Timeline
    tl
      
      .from(brandHeading, 1.25, {y: -50, autoAlpha: 0, ease:Power1.easeOut}, '+=1.5')
      .from(introText, 0.5, {y: -25, autoAlpha: 0, ease:Power1.easeOut}, '-=0.55');
  });

$(document).ready(function(){

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // pin the intro
  var pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '#hello',
    triggerHook: 0.2,
    duration: '25%'
  })
  .setPin('#hello', {pushFollowers: false})

  .addTo(controller);

  //   // pin the intro marx
  // var pinIntroScene = new ScrollMagic.Scene({
  //   triggerElement: '#marx',
  //   triggerHook: 0
  // })
  // .setPin('#marx', {pushFollowers: false})

  // .addTo(controller);


  // full screen pin
  var pinIntroScene3 = new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: 0.75,
    duration: '100%'
  })
  .setPin('.bg-image-full', {pushFollowers: false})

  .addTo(controller);

  // sitting me slide down

  var sittingme = $('.sittingme ');

    var tween = new TimelineMax()
    .from(sittingme, 1.5, {y: -250, autoAlpha: 1, ease:Power1.easeOut});

    var scene = new ScrollMagic.Scene({triggerElement: "#about", duration: 75, tweenChanges: true})
    .setTween(tween)
                  .addIndicators() // add indicators (requires plugin)
                  .reverse(false)
                  .addTo(controller);

    //
      var duration = 0.75;

      var tl = new TimelineMax();
        //grow the line
      tl
        //increase size of clipPath to reveal text
        .from(".test", duration, {height:-100, ease:Linear.easeNone, repeat:0}, "reveal");
                  



  // skills slide in

  var skillsContainer = $('.skills-container'),
          siteProjects = $('.siteProjects'),
          skills1 = $('.skills1'),
          skills2 = $('.skills2'),
          skills3 = $('.skills3'),
          skills4 = $('.skills4');

    var tween = new TimelineMax()
    .from(skillsContainer, 1.25, {x: -2000, autoAlpha: 0, ease: Back.easeOut.config(0.75)})
    .from(siteProjects, 1, {x: -2000, autoAlpha: 0, ease: Back.easeOut.config(0.75)}, '-=1')
    .from(skills1, 0.5, {y: 25, autoAlpha: 0, ease: Back.easeOut.config(1.7)}, '-=0.1')
    .from(skills2, 0.5, {y: 25, autoAlpha: 0, ease: Back.easeOut.config(1.7)}, '-=0.5')
    .from(skills3, 0.5, {y: 25, autoAlpha: 0, ease: Back.easeOut.config(1.7)}, '+=0.1')
    .from(skills4, 0.5, {y: 25, autoAlpha: 0, ease: Back.easeOut.config(1.7)}, '-=0.5');


    var scene = new ScrollMagic.Scene({triggerElement: ".work-section  .sec-title", duration: 350, tweenChanges: true})
    .setTween(tween)
                  .addIndicators() // add indicators (requires plugin)
                  .reverse(false)
                  .addTo(controller);

  
   // svg animation
  function pathPrepare ($el) {
            var lineLength = $el[0].getTotalLength();
            $el.css("stroke-dasharray", lineLength);
            $el.css("stroke-dashoffset", lineLength);
          }
          
          var $squiggle1 = $("path#squiggle1");
          
          // prepare SVG
          pathPrepare($squiggle1);
          
          // build tween
          var tween = new TimelineMax()
            .add(TweenMax.to($squiggle1, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
            .add(TweenMax.to($squiggle1, 1, {stroke: "#ff5751", ease:Linear.easeNone}), 0);     // change color during the whole thing
          
          // build scene
          var scene = new ScrollMagic.Scene({triggerElement: ".sec-title", duration: 250, tweenChanges: true})
                  .setTween(tween)
                  .addIndicators() // add indicators (requires plugin)
                  .addTo(controller);

  // svg animation
  function pathPrepare ($el) {
            var lineLength = $el[0].getTotalLength();
            $el.css("stroke-dasharray", lineLength);
            $el.css("stroke-dashoffset", lineLength);
          }
          
          var $squiggle2 = $("path#squiggle2");
          
          // prepare SVG
          pathPrepare($squiggle2);
          
          // build tween
          var tween = new TimelineMax()
            .add(TweenMax.to($squiggle2, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
            .add(TweenMax.to($squiggle2, 1, {stroke: "#ff5751", ease:Linear.easeNone}), 0);     // change color during the whole thing
          
          // build scene
          var scene = new ScrollMagic.Scene({triggerElement: ".work-section .sec-title", duration: 250, tweenChanges: true})
                  .setTween(tween)
                  .addIndicators() // add indicators (requires plugin)
                  .addTo(controller);

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

