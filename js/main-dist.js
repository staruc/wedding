function deferBg() {
    for (var e = document.getElementsByClassName("defer_bg"), t = 0; t < e.length; t++) e[t].getAttribute("data-bg-load") && e[t].setAttribute("style", e[t].getAttribute("data-bg-load"));
}

function unifyGrid() {
    var e = -1;
    $(".equal_heights").each(function() {
        var t = $(this);
        t.find(".heightblock").each(function() {
            var t = $(this).children(".innerheight");
            e = e > t.outerHeight() ? e : t.outerHeight();
        }), t.find(".heightblock").each(function() {
            $(this).height(e);
        });
    });
}

function setHeights() {
    var e = -1;
    $(".set_heights").each(function() {
        var t = $(this), s = t.find(".height_get");
        e = e > s.outerHeight() ? e : s.outerHeight(), t.find(".height_set").height(e);
    });
}

function objectFit() {
    Modernizr.objectfit || $("img.object_fit").each(function() {
        var e, t = $(this);
        "" != t.attr("src") ? e = t.prop("src") : "" != t.data("src") && (e = t.data("src")), 
        console.log("object-fit " + e), t.parent().addClass("bg").css("background-image", "url(" + e + ")"), 
        t.hide();
    });
}

function lazy() {
    $(".lazy_waypoint").waypoint(function(e) {
        $(this.element).loadImg(), this.destroy();
    }, {
        offset: "150%"
    });
}

function faded() {
    $(".fade").waypoint(function(e) {
        var t = $(this.element);
        t.hasClass("inslide") || t.addClass("faded"), this.destroy();
    }, {
        offset: "90%"
    });
}

function scrollToEl(e, t) {
    var s = e.attr("href");
    $("html,body").animate({
        scrollTop: $(s).offset().top
    }, 500), console.log($(s).offset().top);
}

function getRandomInt(e, t) {
    return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e)) + e;
}

function deferImg() {
    for (var e = document.getElementsByClassName("defer_img"), t = 0; t < e.length; t++) e[t].getAttribute("data-src") && e[t].setAttribute("src", e[t].getAttribute("data-src")), 
    e[t].getAttribute("data-srcset") && e[t].setAttribute("srcset", e[t].getAttribute("data-srcset")), 
    "VIDEO" == e[t].parentNode.tagName && document.getElementById("hero-video").play();
}

function beforeAfter() {
    $(".before_after").each(function() {
        var e = $(this), t = e.find(".before"), s = e.find(".after");
        $("#res").css("z-index") > 1 ? t.insertBefore(s) : s.insertBefore(t);
    });
}

function fadeSlide(e) {
    e.addClass("custom-current"), e.find(".fade").each(function() {
        var e = $(this);
        e.hasClass("faded") || e.addClass("faded");
    });
}

if (jQuery.fn.loadImg = function() {
    return this.attr("src", this.data("src")), this.attr("srcset", this.data("srcset")), 
    this;
}, $("img.object_fit").length && objectFit(), $(".nav_link").on("click", function(e) {
    e.preventDefault(), $(".lpane, .rpane").toggleClass("pane_on"), $("body").toggleClass("menu-on");
}), $(".lazy_waypoint") && lazy(), $(".firstman").waypoint(function(e) {
    var t = $("header");
    "down" == e ? t.addClass("headscroll") : t.removeClass("headscroll");
}, {
    offset: "-100px"
}), $(".slider").length && $(".slider").each(function() {
    var e = $(this);
    e.on("init", function(t, s, i, o) {
        e.addClass("slideon"), setTimeout(function() {
            var e = $(".slick-current");
            e.addClass("custom-current"), fadeSlide(e);
        }, 300), e.find("img").each(function() {
            $(this).loadImg();
        }), $(this).hasClass("news-slider") && $("#res").css("z-index") > 1 && unifyGrid(), 
        Waypoint.refreshAll(), objectFit();
    }), e.on("beforeChange", function(t, s, i, o) {
        e.find('[data-slick-index="' + i + '"]').removeClass("custom-current");
        var a = e.find('[data-slick-index="' + o + '"]').data("slidetheme");
        logo.hasClass("use_slides") && "dark" == a ? logo.removeClass().addClass("use_slides logo_light") : logo.hasClass("use_slides") && "light" == a && logo.removeClass().addClass("use_slides logo_dark");
    }), e.on("afterChange", function(t, s, i) {
        fadeSlide(e.find('[data-slick-index="' + i + '"]'));
    });
    var t = !1;
    $(this).hasClass("a_height") && (t = !0), $(this).hasClass("news-slider") && (t = 8e3), 
    $(this).waypoint(function(s) {
        e = $(this.element), setTimeout(function() {
            e.slick({
                slide: ".slide",
                centerMode: !1,
                slidesToShow: 1,
                pauseOnHover: !1,
                slidesToScroll: 1,
                infinite: !0,
                autoplay: !0,
                autoplaySpeed: 6e3,
                speed: 650,
                pauseOnHover: !1,
                dots: !0,
                draggable: !0,
                swipe: !0,
                touchMove: !0,
                arrows: !1,
                touchThreshold: 10,
                useTransform: !0,
                cssEase: cB,
                adaptiveHeight: t
            });
        }, 500), this.destroy();
    }, {
        offset: "150%"
    });
}), $(".scrollto").length && $(".scrollto").on("click", function(e) {
    e.preventDefault(), scrollToEl($(this));
}), $(".fade").length && faded(), $(".opo video").length && $(".opo").each(function() {
    var e = $(this), t = e.find("video")[0];
    e.on("mouseenter touchstart", function() {
        t.playbackRate = 1, t.play();
    }), e.on("mouseleave blur", function() {
        t.pause();
    });
}), $(".rsvp_wrap").length && (console.log("sad"), $('[href="#rsvp"]').on("click", function(e) {
    e.preventDefault(), $(".rsvp_wrap").addClass("rsvp_on");
})), $(".date_boy input").length && $(".date_boy input").flatpickr({
    dateFormat: "Y-m-d",
    altFormat: "l F d, Y",
    minDate: "today",
    disableMobile: !0,
    altInput: !0
}), $(".defer_img").length && deferImg(), document.getElementById("hero-video")) {
    var heroVid = document.getElementById("hero-video");
    timeCt = 1, heroVid.addEventListener("timeupdate", function() {
        this.currentTime > 5 && 1 == timeCt && (console.log("5 sec"), timeCt++), this.currentTime > 10 && 2 == timeCt && (console.log("10 sec"), 
        timeCt++);
    }, !1);
}

beforeAfter(), $("#res").css("z-index") > 1 && $(".set_heights").length && setHeights(), 
$("#res").css("z-index") > 1 && ".height_go".length && unifyGrid(), $(window).resize(function() {
    $("#res").css("z-index") > 1 ? (unifyGrid(), setHeights()) : ($(".heightblock").css("height", ""), 
    $(".height_set").css("height", "")), beforeAfter();
});