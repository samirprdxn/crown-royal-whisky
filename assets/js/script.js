$('.hamburger').click(function(e) {
	e.preventDefault();
	$this = $(this);
	$this.siblings('.nav__list').toggleClass('block');
	$this.children('.hamburger__line1').toggleClass('ham1');
	$this.children('.hamburger__line2').toggleClass('ham3');
	$this.children('.hamburger__line3').toggleClass('ham2');
});
var index = 0;
var slide_length = $('.slide').length;
$slide = $(".slide");
// slide image when clicked on left arrow
$(".banner__prev").click(function(event){
	event.preventDefault();
	if (index <= 0) {
		index = slide_length-1;
	} else{
		index--;
	}
	changeSlide(index);
});

// slide image when clicked on right arrow
$(".banner__next").click(function(event){
	event.preventDefault();
	if (index >= slide_length-1) {
		index=0;
	} else{
		index++;
	}
	changeSlide(index);
});

function changeSlide(i) {
	$slide.removeClass("active");
	$slide.eq(i).addClass('active');
}