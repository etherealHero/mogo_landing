$(function () {

    var header = $("#header"),
        scrollOffset = $(window).scrollTop();

    // header fixed
    var checkScroll = function(scrollOffset) {
        if (scrollOffset >= $('#intro').innerHeight()) {
            header.addClass('fixed')
        } else {
            header.removeClass('fixed')
        }
    }

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    // smooth scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    });

    // menu nav toggle
    $("#toggle").on("click", function (event) {
        event.preventDefault();

        $("#nav").toggleClass("active");
        $("#toggle").toggleClass("active");
        $("#header").toggleClass("fixed");
    });

    // collapse accordion
    $("accordion__item").on("click", function (event) {
        event.preventDefault();

        $(this).addClass('active');
    });

})