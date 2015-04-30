var slider = jQuery('.slider');
var newHeight = '200px';

// go through the images @ .slider
jQuery('.item', slider).each(function(){

	// grab the src
	var img = jQuery('img', this);
	var src = img.attr('src');

	// dump the image
	img.remove();

	// append the src to the now-empty div's background
	jQuery(this).css(
		{
			'height': newHeight,
			'background-image': 'url(' + src + ')',
			'background-size': 'cover',
			'background-position': 'center'
		}
	)

});

// make sure the div containing .slider gives us space
slider.parent().css('height', newHeight);