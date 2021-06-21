//jQuery is required to run this code
$(document).ready(function() {
	if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
		$('.video-container').show();
		scaleVideoContainer();
		// initBannerVideoSize('.video-container .poster img');
		initBannerVideoSize('.video-container .filter');
		initBannerVideoSize('.video-container video');
		$(window).on('resize', function() {
			scaleVideoContainer();
			// scaleBannerVideoSize('.video-container .poster img');
			scaleBannerVideoSize('.video-container .filter');
			scaleBannerVideoSize('.video-container video');
		});
	}
});

function scaleVideoContainer() {
	var height = $(window).height() + 5;
	var unitHeight = parseInt(height) + 'px';
	$('.homepage-hero-module').css('height', unitHeight);
}

function initBannerVideoSize(element) {
	$(element).each(function() {
		$(this).data('height', $(this).height());
		$(this).data('width', $(this).width());
	});
	scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element) {
	var windowWidth = $(window).width(),
		windowHeight = $(window).height() + 5,
		videoWidth,
		videoHeight;
	var actualVideoWidth = 0;
	$(this).bind("loadedmetadata", function() {
		actualVideoHeight = this.videoWidth;
	});
	$(element).each(function() {
		// $('.homepage-hero-module').hide();
		var videoAspectRatio = $(this).data('height') / $(this).data('width');
		// $(this).width(windowWidth);
		// if(windowWidth < 1000){
		//     videoHeight = windowHeight;
		//     videoWidth = videoHeight / videoAspectRatio;
		//     $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
		//
		//     $(this).width(videoWidth).height(videoHeight);
		// }
		videoWidth = $(this).innerWidth() - 210;
		var browserWidth = $('body').innerWidth();
		if(videoWidth < browserWidth) {
			$(this).width(browserWidth).height('auto');
		}
		$('.homepage-hero-module').show();
		$('.homepage-hero-module .video-container video').addClass('fadeIn animated');
	});
}