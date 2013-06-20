$(".pill").css({
    '-webkit-transform': 'skewY(0deg)',
    '-moz-transform': 'skewY(0deg)',
    'transform': 'skewY(0deg)',
});
var animateDelay = 100;
$("#links a").each(function () {
    var $this = $(this);
    var origOffset = $this.offset();
    $this.css({'position': 'fixed', 'top': '100%', 'left': origOffset.left});

    setTimeout($.proxy(function () {
        this.animate({'top': origOffset.top}, 300, 'linear');
    }, $this), animateDelay);
    animateDelay += 100;
});

$(".rotator-right, .rotator-left").show().each(function (_, h) {
    $(this).css('top', $(window).height() / 2 - $(this).height() / 2);
});
