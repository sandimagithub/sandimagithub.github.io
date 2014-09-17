$(document).ready(function() {

	var count;

	function resetCarousel() {
		count = 1;
		$("#carousel img").hide();
		$("#carousel img#img1").fadeIn();
	}

	resetCarousel();

	setInterval(function() {
		if (count < 3) {
			count++;
			$("#carousel img").hide();
			$("#carousel img#img" + count).fadeIn();
		} else {
			resetCarousel();
		}
	}, 3000);
});