let isClicked = false

$(window).scroll(function () {
	if ($(this).scrollTop() > 500) {
		$(".arrows").fadeOut()
	}
})

$(".hamburger").on("click", function () {
	if (!isClicked) {
		isClicked = true
		$(".sidebar").css("transform", "translateX(0)")
		$(".line2").css("visibility", "hidden")
		$(".line1").css("transform", "translate(-5%,300%) rotate(-45deg)")
		$(".line3").css("transform", "translate(-2%,-450%) rotate(45deg)")
	} else {
		isClicked = false
		$(".sidebar").css("transform", "translateX(-100%)")
		$(".line1").css("transform", "none")
		$(".line3").css("transform", "none")
		$(".line2").css("visibility", "visible")
	}
})
