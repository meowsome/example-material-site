//Adapted from https://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
$('a[href^="#"].link').on('click', function () {
    $("html, body").animate({
        scrollTop: 0
    });
    setTimeout(function () {
        var pageTitle = window.location.hash.charAt(1).toUpperCase() + window.location.hash.slice(2);
        document.title = pageTitle + " | Example Title";
    }, 100);
});

$(".ellipsis-menu").click(function () {
    var clicks = $(this).data('clicks');
    if (clicks) {
        $(".ellipsis-menu li").removeClass("ellipsis-menu-active");
        $(".ellipsis-menu li").delay(100).hide(0);
    } else {
        $(".ellipsis-menu li").show(0);
        $(".ellipsis-menu li").delay(100).addClass("ellipsis-menu-active");
    }
    $(this).data("clicks", !clicks);
});

$(".selector").click(function () {
    var clicks = $(this).data('clicks');
    if (clicks) {
        $(".selector li").removeClass("selector-active");
        $(".selector li").delay(100).hide(0);
    } else {
        $(".selector li").removeClass("selector-main");
        $(".selector li").show(0);
        $(".selector li").delay(100).addClass("selector-active");
    }
    $(this).data("clicks", !clicks);
});

$(".selector-1").click(function () {
    $(".demo-background").css("background", "#d14747");
    $(".demo-accent").css("background", "#a83939");
    $(".demo-accent-2").css("background", "#efc2c2");
    $(this).addClass("selector-main");
});

$(".selector-2").click(function () {
    $(".demo-background").css("background", "#45a845");
    $(".demo-accent").css("background", "#388938");
    $(".demo-accent-2").css("background", "#b0e8b0");
    $(this).addClass("selector-main");
});

$(".selector-3").click(function () {
    $(".demo-background").css("background", "#4747d1");
    $(".demo-accent").css("background", "#343499");
    $(".demo-accent-2").css("background", "#bebef7");
    $(this).addClass("selector-main");
});

$(".selector-4").click(function () {
    $(".demo-background").css("background", "#9b4a9b");
    $(".demo-accent").css("background", "#7a397a");
    $(".demo-accent-2").css("background", "#edc4ed");
    $(this).addClass("selector-main");
});

$(".selector-5").click(function () {
    $(".demo-background").css({
        "background": "url('images/mountain.jpg') no-repeat center fixed",
        "background-size": "cover"
    });
    $(".demo-accent").css("background", "rgba(0,0,0,0.25)");
    $(".demo-accent-2").css("background", "#BFBFBF");
    $(this).addClass("selector-main");
});

$(".selector-6").click(function () {
    $(".demo-background").css({
        "background": "url('images/palm-trees.jpg') no-repeat center fixed",
        "background-size": "cover"
    });
    $(".demo-accent").css("background", "rgba(0,0,0,0.25)");
    $(".demo-accent-2").css("background", "#e08c79");
    $(this).addClass("selector-main");
});

$(".hamburger").click(function () {
    $(".mobile-navigation-wrapper").show(0);
    $(".mobile-navigation-wrapper").delay(100).addClass("mobile-navigation-wrapper-active");
    $(".mobile-navigation").delay(200).addClass("mobile-navigation-active");
});

$(".mobile-navigation-wrapper").click(function () {
    $(this).removeClass("mobile-navigation-wrapper-active");
    $(".mobile-navigation").delay(100).removeClass("mobile-navigation-active");
    $(".mobile-navigation-wrapper").delay(200).hide(0);
});
