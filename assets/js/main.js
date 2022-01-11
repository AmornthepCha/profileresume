(function($) {
  
  "use strict";  

  $(window).on('load', function() {

    /* 
   MixitUp
   ========================================================================== */
  $('#portfolio').mixItUp();

  /* 
   One Page Navigation & wow js
   ========================================================================== */
    var OnePNav = $('.onepage-nev');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset,
    });
  
  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 10) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
            $('.switch-field').addClass('hide');
            $('.switch-mobile').addClass('hide');
            $('.navbar-img').style.display('block');
            
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
            $('.switch-field').removeClass('hide');
            $('.switch-mobile').removeClass('hide');
            // $('.navbar-img').addClass('hide');
        }
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
        closedSymbol: '<i class="icon-arrow-right"></i>',
        openedSymbol: '<i class="icon-arrow-down"></i>',
      });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    /* Counter
    ========================================================*/
    $('.counterUp').counterUp({
     delay: 10,
     time: 1000
    });


    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

    /* Language
    ========================================================*/
    $('.language').on('change',function() {
      if($('.language:checked').val() == 'thi'){
        $('.thi-language').removeClass('hide');
        $('.eng-language').addClass('hide');
        $('.eng-png').addClass('hide');
        $('.thi-png').removeClass('hide');  
      }else{
        $('.thi-language').addClass('hide');
        $('.eng-language').removeClass('hide');
        $('.thi-png').addClass('hide');
        $('.eng-png').removeClass('hide');  
      }
    });

    $('.eng-png').on('click',function() {
      $('.eng-png').addClass('hide');
      $('.thi-png').removeClass('hide');
      $('.language').val('thi').trigger('change');

    });

    $('.thi-png').on('click',function() {
      $('.thi-png').addClass('hide');
      $('.eng-png').removeClass('hide');
      $('.language').val('eng').trigger('change');
    });


  });      

}(jQuery));