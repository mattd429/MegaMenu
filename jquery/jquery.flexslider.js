/*
 * jQuery FlexSlider v2.6.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;
(function ($) {
  
  var focused = true;
  
  //Flexsider: Object Instance
  $.flexslider = function(el, options) {
    var slider = $(el);
    
    // making variables public
    slider.vars = $.extend({}, $.flexslider.defaults, options);
  }

})
