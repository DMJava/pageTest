$(window).load(function () {
    $(".before-after").twentytwenty({
        before_label: 'Without changes', // Set a custom before label
        after_label: 'With changes', // Set a custom after label
    });
    $(".before-slider").slick({
        draggable: false,
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
    });
    $('.menu-button').on('click', function () {
        $('.menu').toggleClass('menu_active')
    });

    // select options
    $('.select_checked').on('click', function(){
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $('.select__option').on('click', function(){
        var value = $(this).attr('data-value');
        $('#select-type').val(value);
        $('.select_checked').text(value);
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $("a[href^='#").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top -140 + "px" });
        return false;
    });
    $('input[type="tel"]').mask("+3 (80) 999-99-99");

    // the map is shown when it is scrolled down
    var reviws = $('.reviews');
    var reviewsTop = reviws.offset().top;
    $(window).bind('scroll', function(){
        var windowTop = $(this).scrollTop();
        if (windowTop > reviewsTop) {
            console.log('Dokrutili');
            $('#map').html('<div style="width: 500px;position: relative;"><iframe width="1688" height="410" src="https://maps.google.com/maps?width=500&amp;height=410&amp;hl=en&amp;q=Ukraine%2C%20Kiev%2C%20Maidan+(TestPage)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> <div style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;"><small style="line-height: 1.8;font-size: 2px;background: #fff;">Powered by <a href="http://www.googlemapsgenerator.com/ru/">Googlemapsgenerator.com/ru/</a> & <a href="http://eurodisneyaanbiedingen.nl/">euro disneyaanbiedingen (nl)</a></small></div><style>#gmap_canvas img {max-width: none !important; background: none !important }</style></div><br />');
            $(window).unbind('scroll');
        }
    });
});