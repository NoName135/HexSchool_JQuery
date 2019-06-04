$(document).ready(function() {
	$(".dropdown").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(".dropdown").toggleClass('active');
		$(".dropdown-open").slideToggle();
	});
	$(".slidetop a").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$("html,body").animate({scrollTop: 0}, 500);
	});

	//Lightbox效果
	$(document).ready(function() {
		lightbox.option({
			'resizeDuration': 700,
			'wrapAround': true
		})
	});
});

//NivoSlider效果
$(window).on('load', function() {
        $('.jq-nivoSlider').nivoSlider();
    });
