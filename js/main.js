/** HUP
  *
  *##HTML5 File Reader/Uploader plugin for jQuery##
  *
  *This jQuery plugin allows you to read files (using the FileReader interface), 
  *
  *or upload files (using XMLHttpRequest Level 2), either chunked or unchunked for either, 
  *
  *and allowing you to easily convert any element into a drop target for any number of files to read or upload.
  *
  *File read/upload start, progress and completion, including batch reporting, occur within custom events, as outlined below.
  *
  *The types of files to be accepted for read or upload can be restricted, based on mime-types and a more permissive version 
  *
  *of the accept filter on HTML5 file inputs.
  *
  *Both uploads and file reads are chunked by default, with a chunk size of 1024*1024 bytes (1 MiB). 
  *
  *These settings, amongst others, are configurable options that can be passed to the plugin, with sensible defaults.
  *
  *
**/

$(document).ready(function() {



  $('').on('', function() {

    // $('.prdqty').show();
    //
    // $('#addToCart').show();


    //36632145802






  });



  $('').on('', function() {


    // let numberlet = $(this).data('let');




    // $('.mainbutton').data('variant-id',numberlet);


    //  alert($('.mainbutton').data('variant-id'));

    // $('.mainbutton').trigger('click');


  });





  // $('.form').find('input, textarea').on('keyup blur focus', function (e) {
  //
  //   var $this = $(this),
  //       label = $this.prev('label');
  //
  //   if (e.type === 'keyup') {
  //     if ($this.val() === '') {
  //       label.removeClass('active highlight');
  //     } else {
  //       label.addClass('active highlight');
  //     }
  //   } else if (e.type === 'blur') {
  //     if( $this.val() === '' ) {
  //       label.removeClass('active highlight');
  //     } else {
  //       label.removeClass('highlight');
  //     }
  //   } else if (e.type === 'focus') {
  //
  //     if( $this.val() === '' ) {
  //       label.removeClass('highlight');
  //     }
  //     else if( $this.val() !== '' ) {
  //       label.addClass('highlight');
  //     }
  //   }
  //
  // });
  //
  // $('.tab a').on('click', function (e) {
  //
  //   e.preventDefault();
  //
  //   $(this).parent().addClass('active');
  //   $(this).parent().siblings().removeClass('active');
  //
  //   target = $(this).attr('href');
  //
  //   $('.tab-content > div').not(target).hide();
  //
  //   $(target).fadeIn(600);
  //
  // });



  //   FOR PRODUCT ACCORDIAN JQUERY

  // $(function() {
  //   // when a tab is clicked
  //   $('.hideSeekTab').on('click', function() {
  //     // if the one you clicked is open,
  //     if ($(this).find('p').hasClass('open')) {
  //       // then close it.
  //       $('.hideSeekTab .open').slideToggle().removeClass('open');
  //       $('.iconBox').removeClass('closed');
  //       // otherwise,
  //     } else {
  //       // close all tabs,
  //       $('.hideSeekTab .open').slideToggle().removeClass('open');
  //       // and open the one you clicked
  //       $(this).find('p').slideToggle().addClass('open');
  //       $('.iconBox').removeClass('closed');
  //       $(this).find('.iconBox').addClass('closed');
  //     }
  //   });
  // });

  //   FOR PRODUCT ACCORDIAN JQUERY


  $('.semuopen').click(function(){
    $('.semuopen').removeClass('headmenu');
    $(this).addClass('headmenu');
  });
  $('.dropdown').mouseenter(function(){
    $(this).addClass('open');
  });
  $('.dropdown').mouseleave(function(){
    $(this).removeClass('open');
  });
  (function() {
    var $window = $(window),
        flexslider = { vars:{} };
    function getGridSize() {
      return (window.innerWidth < 600) ? 1 :
      (window.innerWidth < 992) ? 2 :
      (window.innerWidth < 2000) ? 3 :
      (window.innerWidth < 1200) ? 3 : 3;
    }


    $('.blog-post-caresoul').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 210,
      itemMargin: 5,
      move: 1,
      controlNav:true,
      minItems: getGridSize(),
      maxItems: getGridSize()
    });

  }());

  if ( $(window).width() > 768) {

  }
  else {
    $( "#customer-service" ).click(function() {
      $( "#main_customer-service" ).toggle( "fast" );
    });

  }
  if ( $(window).width() > 768) {

  }
  else {
    $( "#information" ).click(function() {
      $( "#main_information" ).toggle( "fast" );
    });

  }
  if ( $(window).width() > 768) {

  }
  else {
    $( "#in_touch" ).click(function() {
      $( "#in_touch_open" ).toggle( "fast" );
    });
  }

  $('#customer-service').click(function() {
    var $this = $(this);

    if ($this.hasClass('active')) {
      $this.removeClass();
    } else if ($this.hasClass('active')) {
      $this.removeClass('red').addClass('active');
    } else {
      $this.addClass('active');
    }
  });


  $('#information').click(function() {
    var $this = $(this);

    if ($this.hasClass('active')) {
      $this.removeClass();
    } else if ($this.hasClass('active')) {
      $this.removeClass('red').addClass('active');
    } else {
      $this.addClass('active');
    }
  });

  $('#in_touch').click(function() {
    var $this = $(this);

    if ($this.hasClass('active')) {
      $this.removeClass();
    } else if ($this.hasClass('active')) {
      $this.removeClass('red').addClass('active');
    } else {
      $this.addClass('active');
    }
  });



  $("#play-video").click(function(){
    $(this).toggleClass("main");
  })

  $("video").prop('muted', true);

  $("#play-video").click( function (){
    if( $("video").prop('muted') ) {
      $("video").prop('muted', false);
    } else {
      $("video").prop('muted', true);
    }
  });

  $('#mystyleModal').on('hidden.bs.modal', function() {
    var $this = $(this).find('iframe'),
        tempSrc = $this.attr('src');
    $this.attr('src', "");
    $this.attr('src', tempSrc);
  });
  $(".btn-play-channel").click(function(){
    $(".btn-play-channel").toggleClass("play_movies");
  });


  $("#mute-video").click( function (){
    if( $("video").prop('muted') ) {
      $("video").prop('muted', false);
    } else {
      $("video").prop('muted', true);
    }
  });
});

$(document).ready(function() {
  thumbnails = $('img[src*="/products/"]').not(':first');
  if (thumbnails.length) {
    thumbnails.bind('click', function() {
      var arrImage = $(this).attr('src').split('?')[0].split('.');
      var strExtention = arrImage.pop();
      var strRemaining = arrImage.pop().replace(/_[a-zA-Z0-9@]+$/,'');
      var strNewImage = arrImage.join('.')+"."+strRemaining+"."+strExtention;
      if (typeof variantImages[strNewImage] !== 'undefined') {
        productOptions.forEach(function (value, i) {
          optionValue = variantImages[strNewImage]['option-'+i];
          if (optionValue !== null && $('.single-option-selector:eq('+i+') option').filter(function() { return $(this).text() === optionValue }).length) {
            $('.single-option-selector:eq('+i+')').val(optionValue).trigger('change');
          }
        });
      }
    });
  }
});
$( document ).ready(function() {
 $(window).scroll(function() {

    if ($(this).scrollTop() > 50){
      $('.function-header').addClass("content_fixed");
    }
    else{
      $('.function-header').removeClass("content_fixed");
    }
  });  });
