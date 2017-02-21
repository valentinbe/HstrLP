// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    //#main-slider, main image perfectly fits screen
	var slideHeight = $(window).height();
	$('#home-slider .item').css('height',slideHeight);

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $('#tohash').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
        
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 5
        }
    });

    $(window).scroll(function(){
        if(($(window).scrollTop() == 0 )&&($(window).width() > 450)) {
            $( "#mainNav" ).css("background", "transparent");
            $( ".navbar-custom .navbar-nav li a " ).css("color", "#ffffff");
            var src = $("#page-top .img-responsive").attr("src").replace("img/logo.png", "img/profile.png");
            $("#page-top .img-responsive").attr("src", src);
            $( "#logo" ).css("padding", "0px");
        }else{
            $( "#mainNav" ).css("background", "#e9eaec");
            $( ".navbar-custom .navbar-nav li a " ).css("color", "#0d2238");
            if ($(window).width() < 768) {
                $( "#logo" ).css("padding", "5px");
                $( "#logo" ).css("width", "auto");
            }else{
                $( "#logo" ).css("padding", "0px");
            }
            var src = $("#page-top .img-responsive").attr("src").replace("img/profile.png", "img/logo.png");
            $("#page-top .img-responsive").attr("src", src);
        }
    });




    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict
