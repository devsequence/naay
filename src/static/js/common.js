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
     if($('.item-line__progress').length > 0){
         $('.item-line__item').each(function (e) {
             var $this = $(this);
             var thsPos = $this.offset().top - 480;
             var thsId = $this.attr('id');
             $(window).on('scroll', function() {
                 var $this = $(this);
                 if ($this.scrollTop() >= thsPos) {
                     $('#'+ thsId).addClass('active')
                 }else{
                     $('#'+ thsId).removeClass('active');
                 }
             });
         });
         $(window).on('scroll', function() {
             var $this = $(this);
             var s = $this.scrollTop(),
                 c = $('.item-line').height(),
                 position = ((s / c) * 100) - 3;
             $(".item-line__progress span").css('height', position + '%');

             if ($this.scrollTop() >= 100) {
                 $(".item-line__progress b").addClass('active');
             }else{
                 $(".item-line__progress b").removeClass('active');
             }
         });
     }
 });
 $('.play-video').on('click', function (e) {
     const $ths = $(this);
     const $thsVideo = $ths.parent().find('video');
     $ths.addClass('hidden');
     $thsVideo.attr('controls', true).get(0).play();
 });
 $('.btn-audio').on('click', function (e) {
     const $ths = $(this);
     const $thsParrent = $ths.parents().find('.item-accordion__text');
     $thsParrent.find('.item-accordion__video').removeClass('hidden');
     $thsParrent.find('.item-accordion__audio').removeClass('hidden');
     $thsParrent.find('.btn-hide').removeClass('hidden');
     $ths.removeClass('hidden');
 });
 $('.btn-hide').on('click', function (e) {
     const $ths = $(this);
     const $thsParrent = $ths.parents().find('.item-accordion__text');
     $thsParrent.find('.item-accordion__video').addClass('hidden');
     $thsParrent.find('.item-accordion__audio').addClass('hidden');
     $thsParrent.find('.btn-hide').addClass('hidden');
 });
 $('.to-top').on('click', function (e) {
     $('html, body').animate({
         scrollTop: $("body").offset().top
     }, 2000);
 });
 if(document.querySelector(".footer-home")){
     console.log('ska');
     document.querySelector('.footer-sidebar-area').style.display = 'none';
 } else {}

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
if($('.item-line').length > 0){
    $('.item-line__item').each(function (e) {
        var $this = $(this);
        var thsPos = $this.offset().top - 180;
        var thsId = $this.attr('id');
        $(window).on('scroll', function() {
            var $this = $(this);
            if ($this.scrollTop() >= thsPos) {
                $('#'+ thsId).addClass('active')
            }else{
                $('#'+ thsId).removeClass('active');
            }
        });
    });
    $(window).on('scroll', function() {
        var $this = $(this);
        var s = $this.scrollTop(),
            c = $('.item-line').height(),
            position = ((s / c) * 100) - 12;
        $(".item-line__progress span").css('height', position + '%');
        if(position >= 100){
            $(".item-line__progress b").removeClass('active');
            $(".item-line__progress span").addClass('end');
        }else{
            $(".item-line__progress b").addClass('active');
            $(".item-line__progress span").removeClass('end');
        }
        // if ($this.scrollTop() >= 380) {
        //     $(".item-line__progress b").addClass('active');
        // }else{
        //     $(".item-line__progress b").removeClass('active');
        // }
    });
}
 $(window).on('scroll', function() {
     var $this = $(this);
     if ($this.scrollTop() >= 800) {
         $('.to-top').addClass('visible');
     }else{
         $('.to-top').removeClass('visible')
     }

 });
 $('.select').select2({
     maximumInputLength: -3 // only allow terms up to 20 characters long
 });
 Fancybox.bind("[data-fancybox]", {});
 // gallery-item