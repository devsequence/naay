 $('.header-lang__title').on('click', function (e) {
     const $ths = $(this);
     $ths.parent().toggleClass('active')
 });
$('.header-btn').on('click', function (e) {
     const $ths = $(this);
     $ths.toggleClass('active');
     $('.header-nav, .header').toggleClass('active');
 });

$('.hero-link a').on('click', function (e) {
     const $ths = $(this);
     if($ths.hasClass('btn-anchor') && $ths.attr('data-anchor-link') ){
         e.preventDefault();
         const $thsHref = $ths.attr('data-anchor-link');
         const hrefItem = $('div[data-id='+$thsHref+']');
         $('html, body').animate({
             scrollTop: hrefItem.offset().top
         }, 'slow');
        if($(hrefItem).hasClass('item-accordion')){
            $(hrefItem).find('.item-accordion__title').trigger('click');
        }
     }
 });
 $('.item-accordion__title').on('click', function (e) {
     const $ths = $(this);
     $ths.toggleClass('active');
     $ths.next().slideToggle();
 });
 $(document).mouseup( function(e){
     var headerLang = $( ".header-lang" );
     if ( !headerLang.is(e.target)
         && headerLang.has(e.target).length === 0 ) {
         headerLang.removeClass('active');
     }
     var headerNav = $( ".header" );
     if ( !headerNav.is(e.target)
         && headerNav.has(e.target).length === 0 ) {
         $('.header-btn, .header-nav, .header').removeClass('active');
     }
 });
// AOS.init({disable: 'mobile'});
//
// $(window).on('scroll', function() {
//     var $this = $(this),
//         $hero = $('.hero'),
//         $header = $('.header');
//     if($('.hero').length > 0){
//         if ($this.scrollTop() > $hero.height() - 100) {
//             $header.addClass('before-scroll-nav');
//         }else{
//             $header.removeClass('before-scroll-nav');
//         }
//         if ($this.scrollTop() > $hero.height() + 50) {
//             $header.addClass('scroll-nav');
//         }
//         else{
//             $header.removeClass('scroll-nav');
//         }
//     }
// });
//
// $().fancybox({
//     backFocus : false,
//     selector : '.certificates-slider .slide:not(.slick-cloned) ',
// });
//
// $('.has-sub .has-sub__title').on('click', function (e) {
//     e.preventDefault();
//     const $ths = $(this);
//     if($ths.hasClass('active')){
//         $ths.removeClass('active');
//         $ths.next().slideUp().removeClass('active');
//     }else{
//         $('.has-sub .has-sub__title').removeClass('active');
//         $('.has-sub ul').slideUp();
//         $ths.addClass('active');
//         $ths.next().slideDown().addClass('active');
//     }
// });
// $('.faq-item__title').on('click', function (e) {
//     e.preventDefault();
//     const $ths = $(this);
//     if($ths.hasClass('active')){
//         $ths.removeClass('active');
//         $ths.parent().removeClass('active');
//         $ths.next().slideUp().removeClass('active');
//     }else{
//         $('.faq-item__title, .faq-item').removeClass('active');
//         $ths.addClass('active');
//         $ths.parent().addClass('active');
//         $ths.next().slideDown().addClass('active');
//     }
// });
//
//
//
// if($(window).width() <= 992){
//     $('.tab-item').each(function (e) {
//         const $ths = $(this),
//             $thsData = $ths.attr('data-tab'),
//             $thsHtml = $ths.html();
//         $('a[data-tab-nav='+$thsData+']').parent().append('<div class="service-item tab-item">'+$thsHtml+'</div>');
//         $ths.remove();
//     });
//     $('.tab-nav__link').on('click', function (e) {
//         e.preventDefault();
//         const $ths = $(this);
//         if($ths.hasClass('active')){
//             $ths.removeClass('active');
//             $ths.parent().find('.service-item ').removeClass('active');
//         }else{
//             $('.has-sub a, .tab-item').removeClass('active');
//             $ths.addClass('active');
//             $ths.parent().find('.service-item ').addClass('active');
//         }
//     })
// }else {
//     $('.has-sub a.tab-nav__link').on('click', function (e) {
//         const $ths = $(this),
//             $thsHref = $ths.attr('data-tab-nav'),
//             $thsData = $thsHref;
//         e.preventDefault();
//         $('.has-sub a, .tab-item').removeClass('active');
//         $ths.toggleClass('active');
//         $('div[data-tab='+$thsData+']').addClass('active');
//     });
// }
// if($('.hero').length > 0){}else{
//     $('.header').addClass('page-nav');
//     $(window).on('scroll', function() {
//         var $this = $(this),
//             $hero = $('.top'),
//             $header = $('.header');
//         if($('.top').length > 0){
//             if ($this.scrollTop() > $hero.height() - 20) {
//                 $header.addClass('before-scroll-nav');
//             }else{
//                 $header.removeClass('before-scroll-nav');
//             }
//             if ($this.scrollTop() > $hero.height() + 100) {
//                 $header.addClass('scroll-nav');
//             }
//             else{
//                 $header.removeClass('scroll-nav');
//             }
//         }
//     });
// }
// $('.header-btn').on('click', function (e) {
//     e.preventDefault();
//     $(this).toggleClass('active');
//     $('.header').toggleClass('active');
//     $('body').toggleClass('scroll');
// });
//
// var count;
// $(".tab-item__list input").change(function() {
//     count = 0;
//     var table_abc = $(".tab-item__list input");
//     for (var i = 0; i < table_abc.length ; ++i) {
//         if ($(table_abc[i]).prop('checked')) {
//             var plusTen = $(table_abc[i]).val() * 10;
//             count += parseInt(plusTen, 10);
//         }
//     }
//     var countLast = count/ 10;
//     if(countLast < 35){
//         $('.progress-item__line span').css('width', countLast+'%')
//
//     }else{
//         $('.progress-item__line span').css('width', '35%')
//     }
//
// });
// $('.btn-blue').on('click', function () {
//     $('.form-tab__item.active').removeClass('active').next().addClass('active');
//     $('.btn-gray').removeClass('disabled').next().text('Send a request').attr('type', 'submit');
//     $('.progress-item__line').addClass('check');
// });
// $('.btn-gray').on('click', function () {
//     $('.form-tab__item.active').removeClass('active').prev().addClass('active');
//     $(this).addClass('disabled').next().text('Next').attr('type', 'button');
//     $('.progress-item__line').removeClass('check');
// });
// // Wait for the DOM to be ready
