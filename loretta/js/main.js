$(document).ready(function(){

    /* Pretty sure you don't need this piece but if you do its here

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});

    */


    // Handles the navigation
    $(".characters, .fontsize, .details").hide();

    $("nav ul li:nth-child(1)").click(function(){
    		$(".about").fadeToggle(1500);
    		$(".characters, .fontsize, .details").hide();
    });
    $("nav ul li:nth-child(2)").click(function(){
    		$(".characters").fadeToggle(1500);
    		$(".about, .fontsize, .details").hide();
    });
    $("nav ul li:nth-child(3)").click(function(){
    		$(".fontsize").fadeToggle(1500);
    		$(".about, .characters, .details").hide();
    });
    $("nav ul li:nth-child(4)").click(function(){
    		$(".details").fadeToggle(1500);
    		$(".about, .characters, .fontsize").hide();
    });


    // Slider Events: called whenever it changes
    $(".slider").on("input", function(){
        // Assigning it to a variable
        var size = this.value;

        // Setting the font size label
        $('#font_size').val(size + ' px');
        // Setting the actual size of the font
        $('.box').css({ 'font-size': parseInt(size) });
    });




});
