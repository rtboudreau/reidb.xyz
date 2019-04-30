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
      setTimeout(function() {
        $('body')
          .addClass('loaded')
          .css({
            'overflow-y': 'scroll'
          });
      }, 1100);
    });


    // rotates hero message
    $(document).ready(function() {
      var now = new Date();
      var hours = now.getHours();

      if (hours < 12) {
        $(".morning").show();
        $(".afternoon").hide();
        $(".evening").hide();
      } else if (hours < 17) {
        $(".afternoon").show();
        $(".evening").hide();
        $(".morning").hide();
      } else {
        $(".evening").show();
        $(".morning").hide();
        $(".afternoon").hide();
      }
    });


    // GreenSock

    // hello fade-in
    $(document).ready(function() {
      var brandHeading = $('.brand-heading'),
        introText = $('.intro-text'),
        tl = new TimelineLite();
      // Adding Tweens To A Timeline
      tl
        .from(brandHeading, 1.25, {
          y: -50,
          autoAlpha: 0,
          ease: Power1.easeOut
        }, '+=1.5')
        .from(introText, 0.5, {
          y: -25,
          autoAlpha: 0,
          ease: Power1.easeOut
        }, '-=0.55');
    });

    // pin the hero section
    $(document).ready(function() {
      // Init ScrollMagic
      var controller = new ScrollMagic.Controller();
      var pinIntroScene = new ScrollMagic.Scene({
          triggerElement: '#hello',
          triggerHook: 0.2,
          duration: '25%'
        })
        .setPin('#hello', {
          pushFollowers: false
        })
        .addTo(controller);

      // Init ScrollMagic
      var controller = new ScrollMagic.Controller();
      var pinIntroScene = new ScrollMagic.Scene({
          triggerElement: '.bg-image-full',
          triggerHook: 0,
          duration: '60%'
        })
        .setPin('.bg-image-full', {
          pushFollowers: false
        })
        .addTo(controller)
        .addIndicators();

        // Pin Devices section
        var controller = new ScrollMagic.Controller();
        var pinIntroScene = new ScrollMagic.Scene({
            triggerElement: '.devices',
            triggerHook: 0.08,
            duration: '90%'
          })
          .setPin('.devices', {
            pushFollowers: false
          })
          .addTo(controller)
          .addIndicators();

          // Pin Small Devices section
          var controller = new ScrollMagic.Controller();
          var pinIntroScene = new ScrollMagic.Scene({
              triggerElement: '.smDevices',
              triggerHook: 0.05,
              duration: '90%'
            })
            .setPin('.smDevices', {
              pushFollowers: false
            })
            .addTo(controller)
            .addIndicators();

      // portfolio slide in
      var cardcolumns = $('.card-columns');

      var tween = new TimelineMax()
        .from(cardcolumns, 0.75, {
          y: 800,
          autoAlpha: 0,
          ease: Power4.easeOut
        });


      var scene = new ScrollMagic.Scene({
          triggerElement: "#work",
          duration: "100%"
        })
        .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .reverse(true)
        .addTo(controller);

      //paragraph copy animations
      var controller = new ScrollMagic.Controller();

      $(".p-wrapper").each(function() {
        var tl = new TimelineMax();
        var par = $(this).find("p");


        tl.from(par, 0.75, {
          y: 50,
          autoAlpha: 0,
          ease: Power4.easeOut
        });

        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.85
          })
          .setTween(tl)
          .addIndicators()
          .addTo(controller);
      });



      // sitting me slide down
      var sittingme = $('.sittingme ');

      var tween = new TimelineMax()
        .from(sittingme, 1.75, {
          y: -187,
          x:  -30,
          scale: 0.5,
          autoAlpha: 1,
          ease: Power1.easeOut
        })
        .to(sittingme, 0, {
          x:  0
        });

      var scene = new ScrollMagic.Scene({
          triggerElement: "#about",
          duration: 0,
          tweenChanges: true
        })
        .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .reverse(true)
        .addTo(controller);




      // skills slide in
      var skillsContainer = $('.skills-container');

      var tween = new TimelineMax()
        .from(skillsContainer, 1.25, {
          y: 200,
          autoAlpha: 0,
          yoyo: true,
          ease: Back.easeOut.config(0.75)
        });


      var scene = new ScrollMagic.Scene({
          triggerElement: "#container-trigger",
          duration: 150,
          tweenChanges: true
        })
        .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .reverse(false)
        .addTo(controller);


      // svg animation
      function pathPrepare($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
      }

      var $squiggle1 = $("path#squiggle1");

      // prepare SVG
      pathPrepare($squiggle1);

      // build tween
      var tween = new TimelineMax()
        .add(TweenMax.to($squiggle1, 0.9, {
          strokeDashoffset: 0,
          ease: Linear.easeNone
        })) // draw word for 0.9
        .add(TweenMax.to($squiggle1, 1, {
          stroke: "#ff5751",
          ease: Linear.easeNone
        }), 0); // change color during the whole thing

      // build scene
      var scene = new ScrollMagic.Scene({
          triggerElement: "#squiggle1_trigger",
          duration: 350,
          tweenChanges: true
        })
        .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

      // svg animation
      function pathPrepare($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
      }

      var $squiggle2 = $("path#squiggle2");

      // prepare SVG
      pathPrepare($squiggle2);

      // build tween
      var tween = new TimelineMax()
        .add(TweenMax.to($squiggle2, 0.9, {
          strokeDashoffset: 0,
          ease: Linear.easeNone
        })) // draw word for 0.9
        .add(TweenMax.to($squiggle2, 1, {
          stroke: "#ff5751",
          ease: Linear.easeNone
        }), 0); // change color during the whole thing

      // build scene
      var scene = new ScrollMagic.Scene({
          triggerElement: "#squiggle2_trigger",
          duration: 350,
          tweenChanges: true
        })
        .setTween(tween)
        .addIndicators("squiggle2") // add indicators (requires plugin)
        .addTo(controller);

    });

    //contact form add class

    $('.js-input').keyup(function() {
      if ($(this).val()) {
        $(this).addClass('not-empty');
      } else {
        $(this).removeClass('not-empty');
      }
    });

    // add dashes to phone number
    $('#form_phone').keyup(function() {
      $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/, '$1-$2-$3'))
    });



    //collapse footer
    $("#collapseOne").on("show.bs.collapse", function() {
      $("html, body").animate({
        scrollTop: 999999
      }, "slow");
    });

    //switch between open and close when footer is clicked

    $('.primary-link').click(function() {
      $('.switchCopy').text($('.switchCopy').text() == '[close]' ? '[open]' : '[close]');
    });

    $('.switchCopy').click(function() {
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

    // current time side stats
    $(document).ready(function() {
      var tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      var tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

      function GetClock(){
      var d=new Date();
      var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
      var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

      if(nhour==0){ap=" AM";nhour=12;}
      else if(nhour<12){ap=" AM";}
      else if(nhour==12){ap=" PM";}
      else if(nhour>12){ap=" PM";nhour-=12;}

      if(nmin<=9) nmin="0"+nmin;
      if(nsec<=9) nsec="0"+nsec;

      var clocktext=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+" "+nhour+":"+nmin+":"+nsec+ap+"";
      document.getElementById('clockbox').innerHTML=clocktext;
      }

      GetClock();
      setInterval(GetClock,1000);
    });


  })(jQuery); // End of use strict

  // returns to top on reload
  //window.onbeforeunload = function () {
  //  window.scrollTo(0, 0);
  //}

});
