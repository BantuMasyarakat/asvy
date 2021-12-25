$(window).scroll(() => {
    // console.log(window.pageYOffset);

    if (window.pageYOffset <= 336) {
        $(".navi:nth-child(1)").addClass("active");
        $(".navi:nth-child(2)").removeClass("active");
        $(".navi:nth-child(3)").removeClass("active");
        $(".navi:nth-child(4)").removeClass("active");
    } else if (window.pageYOffset >= 336) {
        $(".navi:nth-child(1)").removeClass("active");
        $(".navi:nth-child(2)").addClass("active");
        $(".navi:nth-child(3)").removeClass("active");
        $(".navi:nth-child(4)").removeClass("active");
    }
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
