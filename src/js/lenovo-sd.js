(function(){
    var $document =  $(document);

    $document.ready(function(){
        var $smartDisplayContainer = $('#smart-display-video');
        var $autoplayOwl = $('.js-sd-owl-autoplay');
        var $navOwl = $('.js-sd-owl-nav');

        $smartDisplayContainer.length && $smartDisplayContainer.YTPlayer({
          fitToBackground: true,
          videoId: $smartDisplayContainer.data('ytid')
        });

        $document.on('click', function(ev) {
            var $target = $(ev.target),
                $activeContainer = $('.js-tile-container.is-active'),
                $targetContainer;

            if ($target.hasClass('js-tile-control') || $target.closest('.js-tile-control').length) {
                ev.preventDefault();

                if ($activeContainer.length && !$target.closest($activeContainer).length) {
                    $activeContainer.removeClass('is-active');
                }

                $targetContainer = $target.closest('.js-tile-container');
                $targetContainer.toggleClass('is-active');

                return;
            }
            
            if ($activeContainer.length && !$target.closest($activeContainer).length)  {
                $activeContainer.removeClass('is-active');
            }
        });

        $autoplayOwl.length && $autoplayOwl.owlCarousel({
            animateOut: 'fadeOut',
            items: 1,
            smartSpeed: 450,
            autoplay: true,
            mouseDrag: false,
            nav: false,
            dots: false,
            autoplayTimeout: 6000,
            loop: true
        });

        $navOwl.length && $navOwl.owlCarousel({
            items: 1,
            mouseDrag: false,
            nav: false,
            dots: true,
            loop: true,
            responsive: {
                1280: {
                    nav: true,
                    stagePadding: 200,
                    center: true
                }
            }
        });

        $('.js-tabs').each(function() {
            var $container = $(this);
            var $tabs = $container.find('.js-tabs-content').children();
            var $btns = $container.find('.js-tabs-btn');

            $tabs.hide().eq(0).show();
            $btns.eq(0).parent().addClass('is-active');

        }).on('click', '.js-tabs-btn', function(e) {
            e.preventDefault();

            var $this = $(this),
                $parent = $this.parent(),
                $others = $parent.siblings(),
                target = $this.attr('href');

            $others.removeClass('is-active');
            $parent.addClass('is-active');

            $this.closest('.js-tabs').find('.js-tabs-content').children().hide();
            $(target).show();
        });

        $('.js-shopnow-scroll').on('click', function(e) {
            e.preventDefault();

            $('html, body').animate({
                scrollTop: $('.sd-site-section--buy').offset().top
            }, 1000);
        });

        AOS.init();
     });
})();