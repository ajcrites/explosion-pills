$(".pill").css({
    '-webkit-transform': 'skewY(0deg)',
    '-moz-transform': 'skewY(0deg)',
    'transform': 'skewY(0deg)',
});
var animateDelay = 100;
$("#links a").each(function () {
    var $this = $(this);
    var origOffset = $this.position();
    $this.css({'position': 'fixed', 'top': '100%', 'left': origOffset.left});

    setTimeout($.proxy(function () {
        this.animate({'top': origOffset.top}, 300, 'linear');
    }, $this), animateDelay);
    animateDelay += 100;
});

$(".rotator-right, .rotator-left").show().each(function (_, h) {
    $(this).css('top', $(window).height() / 2 - $(this).height() / 2);
});

$("[class^=rotator]").click(function (e) {
    var $this = $(this);
    $.get($this.attr("href")).done(function (page) {
        var $page = $(page).find("#page");
        $page.removeAttr("id");
        $page.insertAfter("#page");
        $page.addClass("tilt-in").css({
            "top": $("#page").offset().top,
            "position": "absolute"
        });
        $("#page").addClass("tilt-out");

        setTimeout(function () {
            $page.css({"transform": "none", "-webkit-transform": "none"});
            $("#page").css({"transform": "rotateY(-90deg)", "-webkit-transform": "rotateY(-90deg)"});
            setTimeout(function () {
                $("#page").remove();
                $page.attr("id", "page").removeClass("tilt-in").css({"position": "static"});
                history.pushState({}, $this.attr("title"), $this.attr("href"));
            }, 500);
        }, 10);
    });
    e.preventDefault();
});
