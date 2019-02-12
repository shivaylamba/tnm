$(document).ready(function () {

initScrollAnimation();
// portfolio
    // $('.gallery ul li a').click(function() {
    //     var itemID = $(this).attr('href');
    //     $('.gallery ul').addClass('item_open');
    //     $('.lectures-wrapper').addClass('noscroll');
    //     $(itemID).addClass('item_open');
    //     return false;
    // });
    // $('.close').click(function() {
    //     $('.port, .gallery ul').removeClass('item_open');
    //     $('.lectures-wrapper').removeClass('noscroll');
    //     return false;
    // });

    //Background images-

    // var images_bg = [
    //     'static/img/Optimized-bg1.png',
    //     'static/img/Optimized-bg2.png',
    //     // 'static/img/pic-3.jpg',
    //     'static/img/Optimized-bg3.png',
    //     'static/img/Optimized-bg4.png',
    //     // 'static/img/image-placeholder.jpg'

    // ]

    // $('.fullBackground').fullClip({
    //     images: images_bg,
    //     transitionTime: 2000,
    //     wait: 5000
    // });


    //Event Type selection-
    var speed = 1000;
    $('.technical').on('click', function(){
        $('.form-wrapper div.showing:not(div.tech_events)').slideUp(speed);
        $('div.tech_events').slideToggle(speed);

        $('#non-technical').removeClass('nontech-click');
        $('#non-technical span').removeClass('nontech-click1');
        $('#cultural').removeClass('cult-click');
        $('#cultural span').removeClass('cult-click1');

        $('#technical').toggleClass('tech-click');
        $('#technical span').toggleClass('tech-click1');
    });

    $('.non-technical').on('click', function(){
        $('.form-wrapper div.showing:not(div.nontech_events)').slideUp(speed);
        $('div.nontech_events').slideToggle(speed);

        $('#technical').removeClass('tech-click');
        $('#technical span').removeClass('tech-click1');
        $('#cultural').removeClass('cult-click');
        $('#cultural span').removeClass('cult-click1');

        $('#non-technical').toggleClass('nontech-click');
        $('#non-technical span').toggleClass('nontech-click1');
    });

    $('.cultural').on('click', function(){
        $('.form-wrapper div.showing:not(div.cult_events)').slideUp(speed);
        $('div.cult_events').slideToggle(speed);

        $('#technical').removeClass('tech-click');
        $('#technical span').removeClass('tech-click1');
        $('#non-technical').removeClass('nontech-click');
        $('#non-technical span').removeClass('nontech-click1');
    
        $('#cultural').toggleClass('cult-click');
        $('#cultural span').toggleClass('cult-click1');
    });

});




function initScrollAnimation() {

    window.sr = ScrollReveal({ reset: true });

    var scrollZoomIn = {
        duration: 400,
        scale    : 0.1,
        mobile: false,
        afterReveal: function (domEl) { $(domEl).css('transition', 'all .3s ease'); }
    };

    var scrollGalleryIn = {
        duration: 400,
        scale    : 0.1,
        mobile: false,
        afterReveal: function (domEl) { $(domEl).css('transition', 'all .3s ease'); }
    };

    var scrollTextFade = {
        duration: 2000,
        mobile: false,      
        afterReveal: function (domEl) { $(domEl).css('transition', 'all .3s linear'); }
    }

    var scrollTextFade2 = {
        duration: 400,
        opacity: 0,
        scale: 1,
        mobile: false,      
        afterReveal: function (domEl) { $(domEl).css('transition', 'all .3s linear'); }
    }


    var scrollFromLeft = {
        duration: 700,
        scale: 1,
        distance: '600px',
        origin:'left',
        mobile: false,      
        afterReveal: function (domEl) { $(domEl).css('transition', 'all .3s linear'); }
    }

    var scrollFromLeft2 = {
        duration: 500,
        scale: 1,
        easing: 'linear',
        distance: '600px',
        origin:'left',
        mobile: false,      
        afterReveal: function (domEl) { $(domEl).css('transition', 'all .3s ease'); }
    }

    var scrollFromTop = {
        duration: 500,
        scale: 1,
        easing: 'linear',
        distance: '600px',
        origin:'top',
        mobile: false,      
        afterReveal: function (domEl) { $(domEl).css('transition', 'all .3s ease'); }
    }

    var scrollFromRight = {
        duration: 700,
        scale: 1,
        distance: '600px',
        origin:'right',
        mobile: false,      
        afterReveal: function (domEl) { $(domEl).css('transition', 'all .3s linear'); }
    }

    var scrollSliderFull = {
        duration: 1200,
        scale : 1,
        easing   : 'ease-in-out',
        distance : '0px',
        mobile: false,          
        afterReveal: function (domEl) { $(domEl).css('transition', 'all .3s ease'); }
    }

    /* Every element initialized once */
    // if ($('#slider-full').length) {

    //     sr.reveal('#slider-full span, #slider-full h1', scrollTextFade);
    // }

    if ($('#timeline').length) {

        // sr.reveal('#timeline .title', scrollFromLeft);
        sr.reveal('#timeline .tt-inner', scrollZoomIn);
        // sr.reveal('#timetable .item-right', scrollFromRight);
    }
    
    // if ($('#gallery').length) {

    //     sr.reveal('#gallery img', scrollGalleryIn, 40);
    // }   

    if ($('footer').length) {
        sr.reveal('.footer_row', scrollZoomIn, 40);
        sr.reveal('footer li', scrollTextFade2, 30);
    }   
    if($('.second-new').length) {
        sr.reveal(' .second-new .note', scrollGalleryIn, 40)
    }
    if($('.second').length) {
        sr.reveal('.second .note', scrollGalleryIn, 40)
    }
    if($('.form-wrapper').length) {
        sr.reveal('.form-wrapper .note', scrollGalleryIn, 40)
    }
    if($('#timeline').length) {
        sr.reveal('#timeline .note', scrollGalleryIn, 40)
    }
    if($('#location-wrap').length) {
        sr.reveal('#location-wrap .note', scrollGalleryIn, 40)
    }
    if($('#faq').length) {
        sr.reveal('#faq .note', scrollGalleryIn, 40)
    }
    if($('#sponsor img').length) {
        sr.reveal('#sponsor img', scrollGalleryIn, 40)
    }

    // if ($('#location-wrap').length) {
    //     sr.reveal('#location-wrap .title', scrollFromLeft2);
    // }
    if ($('#location-wrap').length) {
        sr.reveal('#location-wrap .subtitle', scrollFromRight, 40);
    }
    // if ($('#sponsors-wrap').length) {
    //     sr.reveal('#sponsors-wrap .title', scrollFromLeft2);
    // }
    if($('#sponsors-wrap .col-sm-3').length) {
        sr.reveal('#sponsors-wrap .col-sm-3', scrollGalleryIn, 40);
    }

    // if ($('.location-past').length) {
    //     sr.reveal('.location-past .title', scrollFromLeft2);
    // }
    if($('.location-past .col-md-3').length) {
        sr.reveal('.location-past .col-md-3', scrollGalleryIn, 40);
    }
    if($('.location-past .col-md-4').length) {
        sr.reveal('.location-past .col-md-4', scrollGalleryIn, 40);
    }
     if($('.location-past .col-md-2').length) {
        sr.reveal('.location-past .col-md-2', scrollGalleryIn, 40);
    }
    // if($('#faq').length){
    //     sr.reveal('.faq-container h2',scrollGalleryIn, 40);
    // }

    if($('.second-new').length) {
        sr.reveal('.second-new .subtitle', scrollFromLeft, 40);
        sr.reveal('.second-new .text', scrollTextFade, 10);
    }
    if($('.second').length) {
        sr.reveal('.second .subtitle', scrollFromLeft, 40);
        sr.reveal('.second .text', scrollTextFade, 10)
    }
    if($('.form-wrapper .lectures-box').length) {
        sr.reveal('.form-wrapper .lectures-box', scrollZoomIn, 40);
    }

    
$(window).on('resize', function(){
    var ww = $(window).width()
    
        // if ($('#team .person_vinay').length) {
        //     sr.reveal('#team .person_vinay img', scrollGalleryIn, 40);
        // }
        // if ($('#team .deepali').length) {
        //     sr.reveal('#team .deepali img', scrollGalleryIn, 40);
        // }
        // if ($('#team .deepanshi').length) {
        //     sr.reveal('#team .deepanshi img', scrollGalleryIn, 40);
        // }
        // if ($('#team .sparsh').length) {
        //     sr.reveal('#team .sparsh img', scrollGalleryIn, 40);
        // }
        // if ($('#team .rajat').length) {
        //     sr.reveal('#team .rajat img', scrollGalleryIn, 40);
        // }
        // if ($('#team .saurabh').length) {
        //     sr.reveal('#team .saurabh img', scrollGalleryIn, 40);
        // }
        // if ($('#team .rishabh').length) {
        //     sr.reveal('#team .rishabh img', scrollGalleryIn, 40);
        // }
        // if ($('#team .heena').length) {
        //     sr.reveal('#team .heena img', scrollGalleryIn, 40);
        // }
        // if ($('#team .dhruv').length) {
        //     sr.reveal('#team .dhruv img', scrollGalleryIn, 40);
        // }
        // if ($('#team .vivek').length) {
        //     sr.reveal('#team .vivek img', scrollGalleryIn, 40);
        // }
        // if ($('#team .meghansh').length) {
        //     sr.reveal('#team .meghansh img', scrollGalleryIn, 40);
        // }
        // if ($('#team .siddharth').length) {
        //     sr.reveal('#team .siddharth img', scrollGalleryIn, 40);
        // }
        // if ($('#team .savitoj').length) {
        //     sr.reveal('#team .savitoj img', scrollGalleryIn, 40);
        // }
        // if ($('#team .arjun').length) {
        //     sr.reveal('#team .arjun img', scrollGalleryIn, 40);
        // }
        // if ($('#team .rasik').length) {
        //     sr.reveal('#team .rasik img', scrollGalleryIn, 40);
        // }
        // if ($('#team .nischay').length) {
        //     sr.reveal('#team .nischay img', scrollGalleryIn, 40);
        // }
        // if ($('#team .sachin').length) {
        //     sr.reveal('#team .sachin img', scrollGalleryIn, 40);
        // }
        // if ($('#team .jahnavi').length) {
        //     sr.reveal('#team .jahnavi img', scrollGalleryIn, 40);
        // }
        // if ($('#team .mudit').length) {
        //     sr.reveal('#team .mudit img', scrollGalleryIn, 40);
        // }
        // if ($('#team .deepanshu').length) {
        //     sr.reveal('#team .deepanshu img', scrollGalleryIn, 40);
        // }
        // if ($('#team .sarthak').length) {
        //     sr.reveal('#team .sarthak img', scrollGalleryIn, 40);
        // }
        // if ($('#team .deepanshu1').length) {
        //     sr.reveal('#team .deepanshu1 img', scrollGalleryIn, 40);
        // }
        // if ($('#team .karan').length) {
        //     sr.reveal('#team .karan img', scrollGalleryIn, 40);
        // }
        // if ($('#team .harsh').length) {
        //     sr.reveal('#team .harsh img', scrollGalleryIn, 40);
        // }
        // if ($('#team .zahid').length) {
        //     sr.reveal('#team .zahid img', scrollGalleryIn, 40);
        // }
        // if ($('#team .mayank').length) {
        //     sr.reveal('#team .mayank img', scrollGalleryIn, 40);
        // }
        // if ($('#team .raghav').length) {
        //     sr.reveal('#team .raghav img', scrollGalleryIn, 40);
        // }
        // if ($('#team .shivani').length) {
        //     sr.reveal('#team .shivani img', scrollGalleryIn, 40);
        // }
     

}).resize();

}




