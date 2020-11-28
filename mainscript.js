$(window).ready(function () {

    var wHeight = $(window).height();

    $('.slide')
        .scrollie({
            scrollOffset: -300,
            scrollingInView: function (elem) {
                console.log('change colour');
                var bgColor = elem.data('background');

                $('body').css('background-color', bgColor);

            }
        });

});