
( function( ) {

    /* SCROLL */

    function scrollDownAnimation() {

        if ( $( window ).innerHeight() + $( window ).scrollTop() < $("body").height() ) {
            $(".scroll.down").addClass("active");
        } else {
            $(".scroll.down").removeClass("active");
        }
    }

    function scrollUpAnimation() {
        if ( $( window ).scrollTop() > 0 ) {
            $(".scroll.up").addClass("active");
            $(".menu-band").addClass("blacken");
        } else {
            $(".scroll.up").removeClass("active");
            $(".menu-band").removeClass("blacken");
        }
    }

    var previousScrollTop = 0;
    function scrollDirectionAnimation() {
        var currentScrollTop =  $( window ).scrollTop();
        if( currentScrollTop > previousScrollTop ) {
            $(".scroll.up").removeClass("running");
            $(".scroll.down").addClass("running");
        } else {
            $(".scroll.down").removeClass("running");
            $(".scroll.up").addClass("running");
        }
        previousScrollTop = currentScrollTop;
    }

    $(window).scroll(function() {
        scrollDownAnimation();
        scrollUpAnimation();
        scrollDirectionAnimation();
    });

    scrollDownAnimation();
    scrollUpAnimation();


    /* ANIMATION */

    function animateWhenScroll( element , animateEffect ) {
        $( element ).waypoint( function() {
            $( element ).addClass( animateEffect );
            animateWithRandomDelay( element );
        }, { offset: '100%'});
    }

    animateWhenScroll( '#header' , 'fadeIn' );
    animateWhenScroll( '#experience' , 'fadeIn' );
    animateWhenScroll( '#education' , 'fadeIn' );
    animateWhenScroll( '#skills' , 'fadeIn' );
    animateWhenScroll( '#skills table .skill > div' , 'skillUp' );
    animateWhenScroll( '#prince2-foundation' , 'fadeIn' );
    animateWhenScroll( '#prince2-practitioner' , 'fadeIn' );
    animateWhenScroll( '#polytech' , 'fadeIn' );
    animateWhenScroll( '#stic' , 'fadeIn' );
    animateWhenScroll( '#trinity' , 'fadeIn' );
    animateWhenScroll( '#ustl' , 'fadeIn' );
    animateWhenScroll( '#languages' , 'fadeIn' );
    animateWhenScroll( '#work-details' , 'fadeIn' );


    function animateWithRandomDelay( element ) {
        $( element +  ' .fadeInLeft' ).each( function( _ , child ) {
            $( child ).css( '-webkit-animation-delay' , ( Math.random() * 1.5 ) + 's');
        });
        $(  element + ' .fadeInRight' ).each( function( _ , child ) {
            $( child ).css( '-webkit-animation-delay' , ( Math.random() * 1.5 ) + 's');
        });
        $(  element + ' .fadeInDown' ).each( function( _ , child ) {
            $( child ).css( '-webkit-animation-delay' , ( Math.random() * 1.5 ) + 's');
        });
        $(  element + ' .fadeInUp' ).each( function( _ , child ) {
            $( child ).css( '-webkit-animation-delay' , ( Math.random() * 1.5 ) + 's');
        });
        $( element + ' .zoomIn' ).each( function( _ , child ) {
            $( child ).css( '-webkit-animation-delay' , ( Math.random() * 1.5 ) + 's');
        });
    }


})();
