$(window).scroll(() => {
    if (window.pageYOffset <= 336) {
        $(".navi:nth-child(1)").addClass("active");
        $(".navi:nth-child(2)").removeClass("active");
        $(".navi:nth-child(3)").removeClass("active");
        $(".navi:nth-child(4)").removeClass("active");
    } else if (window.pageYOffset >= 336 && window.pageYOffset <= 1917) {
        $(".navi:nth-child(1)").removeClass("active");
        $(".navi:nth-child(2)").addClass("active");
        $(".navi:nth-child(3)").removeClass("active");
        $(".navi:nth-child(4)").removeClass("active");
    } else if (window.pageYOffset >= 1917 && window.pageYOffset <= 2139) {
        $(".navi:nth-child(1)").removeClass("active");
        $(".navi:nth-child(2)").removeClass("active");
        $(".navi:nth-child(3)").addClass("active");
        $(".navi:nth-child(4)").removeClass("active");
    } else if (window.pageYOffset >= 2139 && window.pageYOffset <= 2189) {
        $(".navi:nth-child(1)").removeClass("active");
        $(".navi:nth-child(2)").removeClass("active");
        $(".navi:nth-child(3)").removeClass("active");
        $(".navi:nth-child(4)").addClass("active");
    }
});

$(".navi:nth-child(1)").click(() => {
    window.scroll(0, 0);
});

$(".navi:nth-child(2)").click(() => {
    window.scroll(0, 337);
});

$(".navi:nth-child(3)").click(() => {
    window.scroll(0, 1918);
});

$(".navi:nth-child(4)").click(() => {
    window.scroll(0, 2140);
});

$(".triangle:nth-child(1)").click(() => {
    let cur = parseInt($(".start-count").val());
    if (cur == 1) {
        return;
    } else {
        $(".start-count").val((cur -= 1));
    }
});

$(".triangle:nth-child(3)").click(() => {
    let cur = parseInt($(".start-count").val());
    $(".start-count").val((cur += 1));
});
