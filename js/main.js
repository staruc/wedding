/*
var videoDefer = document.getElementsByTagName('source');
for (var i=0; i<videoDefer.length; i++) {
if(videoDefer[i].getAttribute('data-init-load')) {
videoDefer[i].setAttribute('src',videoDefer[i].getAttribute('data-init-load'));
} }

var videoElem = document.getElementsByTagName('video');
videoElem[0].play();
*/

function deferBg() {
var bgDefer = document.getElementsByClassName('defer_bg');
for (var i=0; i<bgDefer.length; i++) {
if(bgDefer[i].getAttribute('data-bg-load')) {
bgDefer[i].setAttribute('style',bgDefer[i].getAttribute('data-bg-load'));
} } }




// find tallest .parent by measuring .height-block heights within
function unifyGrid() {
    var maxHeight = -1;
    $('.equal_heights').each(function() {

    	var eqGroup = $(this);

		eqGroup.find('.heightblock').each(function() {
		    var inner = $(this).children('.innerheight');
		    maxHeight = maxHeight > inner.outerHeight() ? maxHeight : inner.outerHeight();
		});
		eqGroup.find('.heightblock').each(function() {
		    $(this).height(maxHeight);
		    //console.log(maxHeight);
		});
    });
}
function setHeights() {
	var maxHeight = -1;
	$('.set_heights').each(function() {

		var eqGroup = $(this);

		var getHeight = eqGroup.find('.height_get');
		maxHeight = maxHeight > getHeight.outerHeight() ? maxHeight : getHeight.outerHeight();
		
		//console.log(getHeight);
		//console.log(maxHeight);
		eqGroup.find('.height_set').height(maxHeight);
	});
}



function objectFit() {
	if ( ! Modernizr.objectfit ) {
		//console.log('no object-fit');
		$('img.object_fit').each(function() {
			var imgEl = $(this);
			var imgSrc;
			if(imgEl.attr('src') != '') {
				imgSrc = imgEl.prop('src');
			} else if(imgEl.data('src') != '') {
				imgSrc = imgEl.data('src');
			}
			console.log('object-fit ' +imgSrc);
			imgEl.parent().addClass('bg').css('background-image', 'url(' + imgSrc + ')');
			imgEl.hide();
		}); 
	}
}

function lazy() {
	$('.lazy_waypoint').waypoint(function(direction) {
		$(this.element).loadImg();
		//console.log(this.element);
		this.destroy();
	}, {
		offset: '150%'
	});
}

function faded() {
	$('.fade').waypoint(function(direction) {
		var thisEl = $(this.element);
		if(!thisEl.hasClass('inslide'))
			thisEl.addClass('faded');

		this.destroy();
	},{offset: '90%'}
	
	);
}



function scrollToEl(scrollEl, scrollDur) {

	var scrollHash = scrollEl.attr('href');
	
	$('html,body').animate({
	    scrollTop: $(scrollHash).offset().top// - 0
	}, 500);
	console.log($(scrollHash).offset().top);

}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function deferImg() {
var imgDefer = document.getElementsByClassName('defer_img');
for (var i=0; i<imgDefer.length; i++) {
	if(imgDefer[i].getAttribute('data-src')) {
	imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
	} 
	if(imgDefer[i].getAttribute('data-srcset')) {
	imgDefer[i].setAttribute('srcset',imgDefer[i].getAttribute('data-srcset'));
	}

	if(imgDefer[i].parentNode.tagName == 'VIDEO') {
		//console.log(imgDefer[i].parentNode);
		document.getElementById('hero-video').play();
	}
} }

function beforeAfter() {

	$('.before_after').each(function() {
		var beforeAfter = $(this);

		var before = beforeAfter.find('.before');
		var after = beforeAfter.find('.after');

		if( $('#res').css('z-index') > 1 ) {
			before.insertBefore(after);
			//console.log('normal');
			
		} else {
			after.insertBefore(before);
			//console.log('inverted');
		}

	});
}



(function( $ ){
   $.fn.loadImg = function() {
   	this.attr('src', (this.data('src')));
   	this.attr('srcset', (this.data('srcset')));

      return this;
   }; 
})( jQuery );




if($('img.object_fit').length)
	objectFit();



$('.nav_link').on('click', function(nav) {
	nav.preventDefault();
	$('.lpane, .rpane').toggleClass('pane_on');
	$('body').toggleClass('menu-on');
});


if($('.lazy_waypoint')) {
	lazy();
}


/*
$('.way_z').waypoint(function(direction) {
	var thisEl = $(this.element);



	if(direction == "down" && thisEl.next('.invisible').length < 1 ) {
		thisEl.clone().insertAfter(thisEl).addClass('invisible').removeClass('part-hijack');
		thisEl.addClass('fixman');
	} else {

		if(thisEl.hasClass('no_scroll'))
			thisEl.next('.invisible').remove();
		

		thisEl.removeClass('fixman');
	}
});
*/

$('.firstman').waypoint(function(direction) {
	var headr = $('header');
	if(direction == "down") {
		headr.addClass('headscroll');
	} else {
		headr.removeClass('headscroll');
	}
	//console.log(direction);

}, {
		offset: '-100px'
});

if($('.slider').length) {


	function fadeSlide(current) {
		current.addClass('custom-current');
		current.find('.fade').each(function() {
			var currentFade = $(this);
			if(!currentFade.hasClass('faded'))
				currentFade.addClass('faded');
		});
	}

	$('.slider').each(function() {

		var hbSlider = $(this);
		hbSlider.on('init', function(event, slick, currentSlide, nextSlide) {

			hbSlider.addClass('slideon');

			setTimeout(function() {
				var current = $('.slick-current');

				current.addClass('custom-current');

				fadeSlide(current);
			},300);

			hbSlider.find('img').each(function() {
				$(this).loadImg();	
			});

			if($(this).hasClass('news-slider') && $('#res').css('z-index') > 1 )
				unifyGrid();

			Waypoint.refreshAll();
			objectFit();
		});
		hbSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			hbSlider.find('[data-slick-index="'+currentSlide+'"]').removeClass('custom-current');

			var slideTheme = hbSlider.find('[data-slick-index="'+nextSlide+'"]').data('slidetheme');

			if(logo.hasClass('use_slides') &&  slideTheme == 'dark') {
				logo.removeClass().addClass('use_slides logo_light');
			} else if(logo.hasClass('use_slides') &&  slideTheme == 'light') {
				logo.removeClass().addClass('use_slides logo_dark');
			}


		});
		hbSlider.on('afterChange', function(event, slick, currentSlide) {
			var current = hbSlider.find('[data-slick-index="'+currentSlide+'"]');

			fadeSlide(current);

		});

		var aHeight = false;
		var aTime = 6000;
		if($(this).hasClass('a_height'))
			aHeight = true;

		if($(this).hasClass('news-slider'))
			aHeight = 8000;


		$(this).waypoint(function(direction) {

			//console.log(hbSlider);

			hbSlider = $(this.element);
			setTimeout(function() {
				//console.log(hbSlider);
				hbSlider.slick({
					slide: '.slide',
					centerMode: false,
					slidesToShow: 1,
					pauseOnHover: false,
					slidesToScroll: 1,
					infinite: true,
					autoplay: true,
					autoplaySpeed: aTime,
					speed: 650,
					pauseOnHover: false,
					//fade: true,
					dots: true,
					draggable: true,
					swipe: true,
					touchMove: true,
					arrows: false,
					touchThreshold: 10,
					//prevArrow: '<div class="customprev"><i class="fa fa-angle-left"></i></div>',
					//nextArrow: '<div class="customnext"><i class="fa fa-angle-right"></i></div>',
					useTransform: true,
					cssEase: cB,
					adaptiveHeight: aHeight,
				});				
			}, 500);

			

			this.destroy();
		},
		{offset: '150%'}
		);
	});

}



if($('.scrollto').length) {

	$('.scrollto').on('click', function(scr) {
		scr.preventDefault();
		var scrollEl = $(this);
		scrollToEl(scrollEl);

	});

}
if($('.fade').length) {
	faded();
}



/*
$('.nav span').html(function (i, html)
{
    return html.replace(/^[^a-zA-Z]*([a-zA-Z]{0,2})/g, '<span class="first_two">$1</span>');
});
*/


if($('.opo video').length) {

	$('.opo').each(function() {
		var thisVid = $(this);
		var thisVidEl = thisVid.find('video')[0];
		//thisVidEl.playbackRate = 0.5;
		thisVid.on('mouseenter touchstart', function() {
			thisVidEl.playbackRate = 1.0;
			thisVidEl.play();
		});
		thisVid.on('mouseleave blur', function() {
			//thisVidEl.playbackRate = 0.1;
			thisVidEl.pause();
		});

	});

}


/*
if($('.about-balls').length) {

	$('.ball').click(function() {
		var thisBall = $(this);
		aboutBallClick(thisBall);


	});

} else if($('.ball').length) {

	$('.ball').click(function() {
		var thisBall = $(this);
		ballClick(thisBall);
		
	});

}
*/

if($('.rsvp_wrap').length) {
console.log('sad');
	$('[href="#rsvp"]').on('click', function(r) {
		r.preventDefault();
		$('.rsvp_wrap').addClass('rsvp_on');

	});

}

if($('.date_boy input').length) {
	$('.date_boy input').flatpickr({
		dateFormat: "Y-m-d",
		altFormat: "l F d, Y",
		minDate: "today",
		disableMobile: true,
		altInput: true,

		//from: "today",
		//to: new Date().fp_incr(365) 
	});


}

if($('.defer_img').length)
	deferImg();

if(document.getElementById('hero-video')) {
	var heroVid = document.getElementById('hero-video');
	timeCt = 1;

	heroVid.addEventListener("timeupdate", function(){
		//console.log(this.currentTime);
	    if(this.currentTime > 5 && timeCt == 1) {
	        console.log('5 sec');
	        timeCt++;
	    }
	    if(this.currentTime > 10 && timeCt == 2) {
	        console.log('10 sec');
	        timeCt++;
	    }
	}, false);
}

beforeAfter();

if($('#res').css('z-index') > 1 && $('.set_heights').length)
	setHeights();

if($('#res').css('z-index') > 1 && ('.height_go').length )
	unifyGrid();


$(window).resize(function() {
	if($('#res').css('z-index') > 1 ) {
		unifyGrid();
		setHeights();
		
	} else {
		$('.heightblock').css('height','');
		$('.height_set').css('height','');
	}

	beforeAfter();
	
});

