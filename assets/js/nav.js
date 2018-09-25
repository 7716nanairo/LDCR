$(function() {
    $('.navToggle').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.nav_wrap').addClass('active');
        } else {
            $('.nav_wrap').removeClass('active');
        }
    });
});
