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
  
    $('.prdqty').show();
    
    $('#addToCart').show();
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
})
