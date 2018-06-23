jQuery(window).load(function(){
  	jQuery.each(jQuery('img.thumb-loader'), function(index, img){
   	 	OnImageLoad(jQuery(img));
  	});
});
function OnImageLoad(img) {

  
    // what's the size of this image and it's parent
    var w = img.width();
    var h = img.height();
    var tw = img.parent().parent().width();
    var th = img.parent().parent().height();

	//if(w == 0) return;
    // compute the new size and offsets
    var result = ScaleImage(w, h, tw, th, false);

    // adjust the image coordinates and size
    img.attr('width', result.width);
    img.attr('height', result.height);
    img.css("left", result.targetleft);
    img.css("top", result.targettop);
    // $(img).css("opacity", 1);
    img.css('opacity', 1);

   }


function resizeImagesOnResize() {
   jQuery('img.thumb-loader').each( function($) {
    var img = jQuery(this);
        // what's the size of this image and it's parent
    var w = img.width();
    var h = img.height();
    var tw = img.parent().parent().width();
    var th = img.parent().parent().height();

    // compute the new size and offsets
    var result = ScaleImage(w, h, tw, th, false);

    // adjust the image coordinates and size
    img.css('width', result.width);
    img.css('height', result.height);
    img.css("left", result.targetleft);
    img.css("top", result.targettop);

  });
};

var resizeTimer;
jQuery(window).resize(function($) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeImagesOnResize, 10);
});
