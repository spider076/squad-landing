// JavaScript Document


$(window).on('load', function () {

	"use strict";

	/*----------------------------------------------------*/
	/*	Preloader
	/*----------------------------------------------------*/

	var preloader = $('#loading'),
		loader = preloader.find('#loading-center');
	loader.fadeOut();
	preloader.delay(400).fadeOut('slow');


	/*----------------------------------------------------*/
	/*	Modal Window
	/*----------------------------------------------------*/

	setTimeout(function () {
		$(".modal:not(.auto-off)").modal("show");
	}, 3600);

});


$(window).on('scroll', function () {

	"use strict";

	/*----------------------------------------------------*/
	/*	Navigtion Menu Scroll
	/*----------------------------------------------------*/

	var b = $(window).scrollTop();

	if (b > 80) {
		$(".wsmainfull").addClass("scroll");
	} else {
		$(".wsmainfull").removeClass("scroll");
	}

});


$(document).ready(function () {

	"use strict";


	new WOW().init();


	/*----------------------------------------------------*/
	/*	Mobile Menu Toggle
	/*----------------------------------------------------*/

	if ($(window).outerWidth() < 992) {
		$('.wsmenu-list li.nl-simple, .wsmegamenu li, .sub-menu li').on('click', function () {
			$('body').removeClass("wsactive");
			$('.sub-menu').slideUp('slow');
			$('.wsmegamenu').slideUp('slow');
			$('.wsmenu-click').removeClass("ws-activearrow");
			$('.wsmenu-click02 > i').removeClass("wsmenu-rotate");
		});
	}

	if ($(window).outerWidth() < 992) {
		$('.wsanimated-arrow').on('click', function () {
			$('.sub-menu').slideUp('slow');
			$('.wsmegamenu').slideUp('slow');
			$('.wsmenu-click').removeClass("ws-activearrow");
			$('.wsmenu-click02 > i').removeClass("wsmenu-rotate");
		});
	}


	/*----------------------------------------------------*/
	/*	Accordion
	/*----------------------------------------------------*/

	$(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();

	$(".accordion > .accordion-item").on('click', function () {
		$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
		$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	});


	/*----------------------------------------------------*/
	/*	Tabs
	/*----------------------------------------------------*/

	$('ul.tabs-1 li').on('click', function () {
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs-1 li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
	});


	/*----------------------------------------------------*/
	/*	Single Image Lightbox
	/*----------------------------------------------------*/

	$('.image-link').magnificPopup({
		type: 'image'
	});


	/*----------------------------------------------------*/
	/*	Video Link #1 Lightbox
	/*----------------------------------------------------*/

	$('.video-popup1').magnificPopup({
		type: 'iframe',
		iframe: {
			patterns: {
				youtube: {
					index: 'youtube.com',
					src: 'https://www.youtube.com/embed/SZEflIVnhH8'
				}
			}
		}
	});


	/*----------------------------------------------------*/
	/*	Video Link #2 Lightbox
	/*----------------------------------------------------*/

	$('.video-popup2').magnificPopup({
		type: 'iframe',
		iframe: {
			patterns: {
				youtube: {
					index: 'youtube.com',
					src: 'https://www.youtube.com/embed/7e90gBu4pas'
				}
			}
		}
	});


	/*----------------------------------------------------*/
	/*	Video Link #3 Lightbox
	/*----------------------------------------------------*/

	$('.video-popup3').magnificPopup({
		type: 'iframe',
		iframe: {
			patterns: {
				youtube: {
					index: 'youtube.com',
					src: 'https://www.youtube.com/embed/0gv7OC9L2s8'
				}
			}
		}
	});


	/*----------------------------------------------------*/
	/*	Statistic Counter
	/*----------------------------------------------------*/

	$('.count-element').each(function () {
		$(this).appear(function () {
			$(this).prop('Counter', 0).animate({
				Counter: $(this).text()
			}, {
				duration: 4000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		}, { accX: 0, accY: 0 });
	});


	/*----------------------------------------------------*/
	/*	Testimonials Rotator
	/*----------------------------------------------------*/

	var owl = $('.reviews-1-wrapper');
	owl.owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		navBy: 1,
		autoplayTimeout: 4500,
		autoplayHoverPause: true,
		smartSpeed: 1500,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});


	/*----------------------------------------------------*/
	/*	Brands Logo Rotator
	/*----------------------------------------------------*/

	var owl = $('.brands-carousel-5');
	owl.owlCarousel({
		items: 5,
		loop: true,
		autoplay: true,
		navBy: 1,
		nav: false,
		autoplayTimeout: 4000,
		autoplayHoverPause: false,
		smartSpeed: 2000,
		responsive: {
			0: {
				items: 2
			},
			550: {
				items: 3
			},
			767: {
				items: 3
			},
			768: {
				items: 6
			},
			991: {
				items: 6
			},
			1000: {
				items: 5
			}
		}
	});


	/*----------------------------------------------------*/
	/*	Brands Logo Rotator
	/*----------------------------------------------------*/

	var owl = $('.brands-carousel-6');
	owl.owlCarousel({
		items: 5,
		loop: true,
		autoplay: true,
		navBy: 1,
		nav: false,
		autoplayTimeout: 4000,
		autoplayHoverPause: false,
		smartSpeed: 2000,
		responsive: {
			0: {
				items: 2
			},
			550: {
				items: 3
			},
			767: {
				items: 3
			},
			768: {
				items: 5
			},
			991: {
				items: 6
			},
			1000: {
				items: 6
			}
		}
	});


	/*----------------------------------------------------*/
	/*	Show Password
	/*----------------------------------------------------*/

	var showPass = 0;
	$('.btn-show-pass').on('click', function () {
		if (showPass == 0) {
			$(this).next('input').attr('type', 'text');
			$(this).find('span.eye-pass').removeClass('flaticon-visibility');
			$(this).find('span.eye-pass').addClass('flaticon-invisible');
			showPass = 1;
		}
		else {
			$(this).next('input').attr('type', 'password');
			$(this).find('span.eye-pass').addClass('flaticon-visibility');
			$(this).find('span.eye-pass').removeClass('flaticon-invisible');
			showPass = 0;
		}

	});


	/*----------------------------------------------------*/
	/*	Newsletter Subscribe Form
	/*----------------------------------------------------*/

	$('.newsletter-form').ajaxChimp({
		language: 'cm',
		url: 'https://dsathemes.us3.list-manage.com/subscribe/post?u=af1a6c0b23340d7b339c085b4&id=344a494a6e'
		//http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
	});

	$.ajaxChimp.translations.cm = {
		'submit': 'Submitting...',
		0: 'We have sent you a confirmation email',
		1: 'Please enter your email address',
		2: 'An email address must contain a single @',
		3: 'The domain portion of the email address is invalid (the portion after the @: )',
		4: 'The username portion of the email address is invalid (the portion before the @: )',
		5: 'This email address looks fake or invalid. Please enter a real email address'
	};


});



document.addEventListener("DOMContentLoaded", () => {
	const radios = document.querySelectorAll("#slider input[type='radio']");
	let index = 2; // start from third radio (indexing from 0)
	const total = radios.length;
  
	function updateSlider() {
	  radios[index].checked = true;
	}
  
	// Auto-slide every 3 seconds
	setInterval(() => {
	  index = (index + 1) % total;
	  updateSlider();
	}, 2000);
  
	// Optional: Allow keyboard navigation with arrow keys
	document.addEventListener("keydown", (e) => {
	  if (e.key === "ArrowRight") {
		index = (index + 1) % total;
		updateSlider();
	  } else if (e.key === "ArrowLeft") {
		index = (index - 1 + total) % total;
		updateSlider();
	  }
	});
  });


// // Slider Javascript

// // set and cache variables
// var w, container, carousel, item, radius, itemLength, rY, ticker, fps;
// var mouseX = 0;
// var mouseY = 0;
// var mouseZ = 0;
// var addX = 0;


// // fps counter created by: https://gist.github.com/sharkbrainguy/1156092,
// // no need to create my own :)
// var fps_counter = {

// 	tick: function () {
// 		// this has to clone the array every tick so that
// 		// separate instances won't share state
// 		this.times = this.times.concat(+new Date());
// 		var seconds, times = this.times;

// 		if (times.length > this.span + 1) {
// 			times.shift(); // ditch the oldest time
// 			seconds = (times[times.length - 1] - times[0]) / 1000;
// 			return Math.round(this.span / seconds);
// 		}
// 		else return null;
// 	},

// 	times: [],
// 	span: 20
// };
// var counter = Object.create(fps_counter);



// $(document).ready(init)

// function init() {
// 	w = $(window);
// 	container = $('#contentContainer');
// 	carousel = $('#carouselContainer');
// 	item = $('.carouselItem');
// 	itemLength = $('.carouselItem').length;
// 	fps = $('#fps');
// 	rY = 360 / itemLength;
// 	radius = Math.round((250) / Math.tan(Math.PI / itemLength));

// 	// set container 3d props
// 	TweenMax.set(container, { perspective: 600 })
// 	TweenMax.set(carousel, { z: -(radius) })

// 	// create carousel item props

// 	for (var i = 0; i < itemLength; i++) {
// 		var $item = item.eq(i);
// 		var $block = $item.find('.carouselItemInner');

// 		//thanks @chrisgannon!
// 		TweenMax.set($item, { rotationY: rY * i, z: radius, transformOrigin: "50% 50% " + -radius + "px" });

// 		animateIn($item, $block)
// 	}

// 	// set mouse x and y props and looper ticker
// 	window.addEventListener("mousemove", onMouseMove, false);
// 	ticker = setInterval(looper, 1000 / 60);
// }

// function animateIn($item, $block) {
// 	var $nrX = 360 * getRandomInt(2);
// 	var $nrY = 360 * getRandomInt(2);

// 	var $nx = -(2000) + getRandomInt(4000)
// 	var $ny = -(2000) + getRandomInt(4000)
// 	var $nz = -4000 + getRandomInt(4000)

// 	var $s = 1.5 + (getRandomInt(10) * .1)
// 	var $d = 1 - (getRandomInt(8) * .1)

// 	TweenMax.set($item, { autoAlpha: 1, delay: $d })
// 	TweenMax.set($block, { z: $nz, rotationY: $nrY, rotationX: $nrX, x: $nx, y: $ny, autoAlpha: 0 })
// 	TweenMax.to($block, $s, { delay: $d, rotationY: 0, rotationX: 0, z: 0, ease: Expo.easeInOut })
// 	TweenMax.to($block, $s - .5, { delay: $d, x: 0, y: 0, autoAlpha: 1, ease: Expo.easeInOut })
// }

// function onMouseMove(event) {
// 	mouseX = -(-(window.innerWidth * .5) + event.pageX) * .0025;
// 	mouseY = -(-(window.innerHeight * .5) + event.pageY) * .01;
// 	mouseZ = -(radius) - (Math.abs(-(window.innerHeight * .5) + event.pageY) - 200);
// }

// // loops and sets the carousel 3d properties
// function looper() {
// 	addX += mouseX
// 	TweenMax.to(carousel, 1, { rotationY: addX, rotationX: mouseY, ease: Quint.easeOut })
// 	TweenMax.set(carousel, { z: mouseZ })
// 	fps.text('Framerate: ' + counter.tick() + '/60 FPS')
// }

// function getRandomInt($n) {
// 	return Math.floor((Math.random() * $n) + 1);
// }