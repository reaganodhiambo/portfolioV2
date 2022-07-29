$(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
        $('#navigation-panel').css('position', 'fixed');
        $('#navigation-panel').css('top', 0);
    } else {
        $('#navigation-panel').css('position', '');
        $('#navigation-panel').css('top', '-100%');
    }
});