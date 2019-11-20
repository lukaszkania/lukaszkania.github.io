
$('.counter').counterUp({
    delay: 10,
    time: 2000
});

$(document).ready(function () {
    $('.skill-level').waypoint(function () {
        $('.skill-level').css({
            animation: "animate-positive 2s",
            opacity: "1"
        });
    }, { offset: '75%' })
});