/* =================================
------------------------------------
  The Summit Conference
  Version: 1.0
 ------------------------------------
 ====================================*/

'use strict';

(function ($) {
    
    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(400).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        console.log($(this).data());
        var gradient = $(this).data('gradient');
        if (gradient) {
            $(this).css('background-image', 'linear-gradient(90deg, rgb(246, 85, 146, '+gradient+'),rgb(94, 105, 221, '+gradient+')), url(' + bg + ')');
        }
        else {
            $(this).css('background-image', 'url(' + bg + ')');
        }
        
    });

    /*------------------
		Navigation
	--------------------*/
	$(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Search Bar Wrap
	--------------------*/
    $(".search-trigger").on('click', function() {
        $(".search-bar-wrap").addClass("active");
    });              


    $(".search-close").on('click', function() {
        $(".search-bar-wrap").removeClass("active");
    });

    $(".social-widget-btn").on('click', function() {
        $(".top-social-links").addClass(".active");
    });


    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hero-items");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        smartSpeed: 1200,
        autoplay: true,
    });

    /*------------------
        CountDown
    --------------------*/
	$("#countdown").countdown("2020/06/18", function(event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Jours</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Heures</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Secondes</p> </div>"));
    });

    $("#countdown-2").countdown("2020/04/18", function(event) {
        $(this).html(event.strftime("<div class='cd-time'><span>%w</span> <p>Semaines</p> </div>" + "<div class='cd-time'><span>%D</span> <p>Jours</p> </div>" + "<div class='cd-time'><span>%H</span> <p>Heures</p> </div>" + "<div class='cd-time'><span>%M</span> <p>Minutes</p> </div>" + "<div class='cd-time'><span>%S</span> <p>Seconds</p> </div>"));
    });

    /*------------------
        About Counter Up
    --------------------*/
    $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
            $(this).text(Math.ceil(now));
            }
        });
    });

    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    /*------------------
        Progress Loader
    --------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-value"><span class="loader-percentage">'+ cpvalue +'%</span></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 187,
                thickness: 5,
                startAngle: -190,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 187,
				thickness: 5,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}

	});



})(jQuery);