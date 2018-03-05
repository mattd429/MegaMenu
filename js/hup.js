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

  
  
  $('.custom').on('click', function() {
 
  });
  
  $('.customclick').on('click', function() {
  
    let numberlet = $(this).data('let');
    
    
    $('.mainbutton').data('variant-id',numberlet);
    
    $('.mainbutton').trigger('click');
    
  });
  
  // for your product accordian Jquery
  // this will allow for your products to pop-out when you
  // click on each product.
  
  $(function() {
    // When a tab is clicked, find the class hideSeekTab
    // when it is clicked on start the function
    $('.hideSeekTab').on('click', function() {
      // If the one you clicked is open,
      if ($(this).find('p').hasClass('open')) {
        // then close it.
        $('.hideSeekTab .open').slideToggle().removeClass('open');
        $('.iconBox').removeClass('closed');
        // otherwise,
      } else {
        // all all tabs.
        $('.hideSeekTab .open').slideToggle().removeClass('open');
        // and open the one you clicked
        $(this).find('p').slideToggle().addClass('open');
        $('.iconBox').removeClass('closed');
        $(this).find('.iconBox').addClass('closed');
        $(this).find('.iconBox').addClass('closed');
      }
    });
  });
 
 // another custom product accordian jquery
 // when a tab is clicked, find the css class .semuopen
 // in hup.css
 $('.semuopen').click(function(){
   // remove headmenu
   $('.semuopen').removeClass('headmenu');
   $(this).addClass('headmenu');
 });
 // drop the menu down when mouse is hovered over menu
 $('.dropdown').mouseender(function(){
   // add the the css class .open to
   // open navbar
 });
 // when the mouse leaves dropdown
 // remove the navbar as open.
 $('.dropdown').mouseleave(function(){
   $(this).removeClass('open');
 });
 // this function is determine the viewport
 // depending on the window size
 // it will show all 3 blog post
 // or 2 or 1
 // can be anything
 (function() {
   let $window = $(window),
       flexslider = { vars:{} };
   function getGridSize() {
     // set the window size for viewport
     return (window.innerWidth < 600) ? 1 :
     (window.innerWidth < 992) ? 2 :
     (window.innerWidth < 2000) ? 3 :
     (window.innerWidth < 1200) ? 3 : 3;
   }
  
  // webpage let's say you want a blog section
  // use the flexslider to add some animation
  // let the values for our flexSlider
  $('.blog-post-caresoul').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 5,
    move: 1,
    controlNav: true,
    minItems: getGridSize(),
    maxItems: getGridSize()
  });
  
 }());
 
 // if the window in viewport is greater than 768px
 if ( $(window).width() > 768) {
   
 }
 else {
   // we will call to a customer-service toggle
   // you can call what ever you like. 
   // basically if in mobile view toggle this.
   $('#customer-service').click(function() {
     // use our hup.css to create some style
     $('#hup_customer-service').toggle('fast');
   });
  
 }
 if ( $(window).width() > 768) {
 
 }
 else {
   // context on mouse-click find the selector class hup_information
   // .toggle(), display or hide the macthing elements.
   $('#information').click(function() {
     $('#hup_information').toggle('fast');
   });
  
 }
 if ( $(window).width() > 768) {
   
 }
 else {
   $('#in_touch').click(function() {
     $('#in_touch_open').toggle('fast');
   });
 }
 
 $
 
})
