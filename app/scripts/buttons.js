$(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $("#topButton").fadeIn()
            }
            else {
                $("#topButton").fadeOut()
            }
        })
        $("#topButton").click(function () {
            $("html").animate({
                scrollTop: 0
            }, 500)
        })
});
                  