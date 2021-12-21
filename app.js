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
