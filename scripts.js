$(function () {
    //A helper function useful for scrolling to an element
    function scrollTo(el) {
        var elOffset = el.offset().top;
        var elHeight = el.height();
        var windowHeight = $(window).height();
        var offset;

        if (elHeight < windowHeight) {
            offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
        } else {
            offset = elOffset;
        }

        $('html,body').animate({
            scrollTop: offset
        });
    }
    //Fade the arrow in the beginning
    if ($(this).scrollTop() > 350) {
        $('#btnTop').fadeIn();
    } else {
        $('#btnTop').fadeOut();
    }

    //Fade in if it exceeds the inital threshold
    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
            $('#btnTop').fadeIn();
        } else {
            $('#btnTop').fadeOut();
        }
    });

    // On click jQuery events
    $("a#toggle").click(function () {
        $("#popmenu").slideToggle();
        return false;
    });

    $("li#cart-action").click(function () {
        scrollTo($(".cart-box"));
        return false;
    });

    $("li#dream-action").click(function () {
        scrollTo($(".dream-box"));
        return false;
    });

    $("li#exp-action").click(function () {
        scrollTo($(".exp-box"));
        return false;
    });
    $("li#gem-action").click(function () {
        scrollTo($(".gem-box"));
        return false;
    });

    $("li#vigor-action").click(function (e) {
        scrollTo($(".vigor-box"));
        return false;
    });

    $("a#btnTop").click(function (e) {
        scrollTo($(".weapons-list"));
        return false;
    });

    // The sword magic
    $(".cart-bg").on("mouseover", function () {
        $(".sword").css("background-image", "url(images/sword_1.png)");
    }).mouseout(function () {
        $(".sword").css("background-image", "url(images/sword_0.png)");
    });
    $(".dream-bg").on("mouseover", function () {
        $(".sword").css("background-image", "url(images/sword_2.png)");
        $(".cart-bg").toggleClass('cart-bg-hover');
    }).mouseout(function () {
        $(".sword").css("background-image", "url(images/sword_0.png)");
        $(".cart-bg").toggleClass('cart-bg-hover');
    });
    $(".exp-bg").on("mouseover", function () {
        $(".sword").css("background-image", "url(images/sword_3.png)");
        $(".cart-bg").toggleClass('cart-bg-hover');
        $(".dream-bg").toggleClass('dream-bg-hover');
    }).mouseout(function () {
        $(".sword").css("background-image", "url(images/sword_0.png)");
        $(".cart-bg").toggleClass('cart-bg-hover');
        $(".dream-bg").toggleClass('dream-bg-hover');
    });
    $(".gem-bg").on("mouseover", function () {
        $(".sword").css("background-image", "url(images/sword_4.png)");
        $(".cart-bg").toggleClass('cart-bg-hover');
        $(".dream-bg").toggleClass('dream-bg-hover');
        $(".exp-bg").toggleClass('exp-bg-hover');
    }).mouseout(function () {
        $(".sword").css("background-image", "url(images/sword_0.png)");
        $(".cart-bg").toggleClass('cart-bg-hover');
        $(".dream-bg").toggleClass('dream-bg-hover');
        $(".exp-bg").toggleClass('exp-bg-hover');
    });
    $(".vigor-bg").on("mouseover", function (e) {
        $(".sword").css("background-image", "url(images/sword_5.png)");
        $(".cart-bg").toggleClass('cart-bg-hover');
        $(".dream-bg").toggleClass('dream-bg-hover');
        $(".exp-bg").toggleClass('exp-bg-hover');
        $(".gem-bg").toggleClass('gem-bg-hover');
    }).mouseout(function () {
        $(".sword").css("background-image", "url(images/sword_0.png)");
        $(".cart-bg").toggleClass('cart-bg-hover');
        $(".dream-bg").toggleClass('dream-bg-hover');
        $(".exp-bg").toggleClass('exp-bg-hover');
        $(".gem-bg").toggleClass('gem-bg-hover');
    });

    //Pop up buttons
    $(".signup-button").click(function () {
        $(".popup-container").css('display', 'flex');
        $(".signup-box").show();
        return false;
    });

    $(".login-button").click(function () {
        $(".popup-container").css('display', 'flex');
        $(".login-box").show();
        return false;
    });

    $(".close-btn").click(function () {
        $(".popup-container").fadeOut(700);
        $(".login-box").hide();
        $(".signup-box").hide();
        return false;
    });
    
    //Setup the scroll reveal animations
    window.sr = ScrollReveal({
        reset: true,
        origin: 'left',
        distance: '100px',
        duration: 600,
    });
    
    sr.reveal('.imgrev');
    sr.reveal('.textrev', {
        origin: 'right'
    });
    
    sr.reveal('.gameloft-logo', {
        origin: 'top',
    });
    
    sr.reveal('.social-btns', {
        reset: true,
        origin: 'top',
    });
});