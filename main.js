$(document).ready(function () {
    AOS.init();
    $('.review-slideshow-main-block').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="facts-button_prev"><img src="images/left-arrow.png"></button>',
        nextArrow: '<button class="facts-button_next"><img src="images/right-arrow.png"></button>',
        responsive:[
            {
                breakpoint : 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                    prevArrow: '<button class="facts-button_prev"><img src=""></button>',
                    nextArrow: '<button class="facts-button_next"><img src=""></button>',
                    autoplay:true,
                    autoplaySpeed : 1000,
                }
            },
        ]
    });
    $('.second-nav2 ul li a').click(function(event){
        event.preventDefault();
        var id = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 120
        }, 1000);
    });
    $('.faq-block-items-content ul li').on('click', function () {
        $(this).parent().parent().find('.faq-onclick-block').slideToggle(300);
    });
    $('.dual-section-items').on('click',function(){
        $('.dual-section-items').removeClass('dual-section-items-active');
        $(this).addClass('dual-section-items-active');
        let active_Tab = $(this).attr('data-id');
        $('.trending-lower-main-bg').removeClass('trending-active');
        $('.trending-lower-main-bg[data-id = "'+ active_Tab +'"]').addClass('trending-active');
    });
});