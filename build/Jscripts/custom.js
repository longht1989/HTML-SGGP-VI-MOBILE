/* ====================================
   Onload functions
   ==================================== */

/* show hide mobile search & menu open */
$('.btn-menu').click(function() {
    $(this).toggleClass('is-active');
    $('.icon-menu').toggleClass('icon-menu-active');
    $('.site-header__menu').slideToggle('fast');
    // close search
    // $('.btn-search').removeClass('is-active');
    // $('.icon-m-search').removeClass('icon-m-search-active');
    // $('.site-header__search').slideUp('fast');
    closeSearch();
});

$('.site-header__menu .menu-close').click(function() {
    $('.btn-menu').removeClass('is-active');
    $('.icon-menu').removeClass('icon-menu-active');
    $('.site-header__menu').slideUp('fast');
});

function closeSearch() {
    $('.btn-search').removeClass('is-active');
    $('.icon-m-search').removeClass('icon-m-search-active');
    $('.site-header__search').slideUp('fast');
};
$('.search-mask').click(function() {
    closeSearch();
});

$('.btn-search').click(function() {
    $(this).toggleClass('is-active');
    $('.icon-m-search').toggleClass('icon-m-search-active');
    $('.site-header__search').slideToggle('fast');
    // close menu
    $('.btn-menu').removeClass('is-active');
    $('.icon-menu').removeClass('icon-menu-active');
    $('.site-header__menu').slideUp('fast');
});


/*demo slider*/

$(function() {
    /*demo slider */
    $('#slider-demo').bxSlider({
        pager: true,
        maxSlides: 1,
        minSlides: 1,
        nextText: '',
        prevText: '',
        nextSelector: '#demo-slider-next',
        prevSelector: '#demo-slider-prev'
    });

    /*demo slider 02 */
    $('#slider-demo-02').bxSlider({
        maxSlides: 1,
        minSlides: 1,
        nextText: '',
        prevText: '',
        nextSelector: '#demo-slider-02-next',
        prevSelector: '#demo-slider-02-prev'
    });
    /*demo slider 02 */
    $('#slider-demo-03').bxSlider({
        maxSlides: 1,
        minSlides: 1,
        nextText: '',
        prevText: '',
        nextSelector: '#demo-slider-03-next',
        prevSelector: '#demo-slider-03-prev'
    });
    /*demo slider */
    $('#subcate-slider').bxSlider({
        pager: false,
        maxSlides: 2,
        minSlides: 2,
        slideMargin: 10,
        slideWidth: 369,
        nextText: '',
        prevText: '',
        nextSelector: '#demo-slider-next',
        prevSelector: '#demo-slider-prev'
    });
});

/*scrool to top */
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scrolltotop').fadeIn();
    } else {
        $('.scrolltotop').fadeOut();
    }
});

//Click event to scroll to top
$('.scrolltotop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});
