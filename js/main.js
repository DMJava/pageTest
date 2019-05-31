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
});