//Adapted from https://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
$(document).ready(function () {
    $('a[href^="#"].scroll').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 1
        }, 750, 'swing', function () {
        });
    });
});