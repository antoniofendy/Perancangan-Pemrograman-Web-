// Vanilla Javascript

// Hiding scroll to top button

window.onscroll = () => {
    const scrollToTop = document.getElementById('BtnScrollToTop');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTop.style.display = "block";
    }
    else {
        scrollToTop.style.display = "none";
    }
}

//Jquery
$('document').ready(function () {

    // ScrollToTop
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#BtnScrollToTop').fadeIn();
        } else {
            $('#BtnScrollToTop').fadeOut();
        }
    });

    $('#BtnScrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });

    // Fancybox
    $('#gallery .content a').fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': false
    });
});