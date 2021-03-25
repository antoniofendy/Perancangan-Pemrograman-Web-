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

// Timeline
const timelineContent = [
    {
        date: '1984',
        content: 'Cipta Karya Tech is founded in Menlo Park, California, by Leonard Bosack and Sandy Lerner'
    },
    {
        date: '1985',
        content: 'Cipta Karya Tech develops an early product, a network interface card for Digital Equipment Corporation’s computers'
    },
    {
        date: '1986',
        content: 'Cipta Karya Tech thus becomes the first company to commercially provide a multi-protocol router'
    },
    {
        date: '1989',
        content: 'Cipta Karya Tech goes live with its customer service site, enabling customers download software and software upgrades.'
    },
    {
        date: '1989',
        content: 'Cipta Karya Tech goes live with its customer service site, enabling customers download software and software upgrades.'
    },
    {
        date: '1990',
        content: 'Cipta Karya Tech goes public, and is listed on the NASDAQ stock exchange, with a valuation of US$224 million.'
    },
    {
        date: '1995',
        content: `John T. Chambers becomes Cipta Karya Tech's chief executive officer, replacing John Morgridge, who becomes Cipta Karya Tech chairman`
    },
    {
        date: '2000',
        content: `Cipta Karya Tech stock reaches its peak, trading above US$79 a share`
    },
    {
        date: '2005',
        content: `Cipta Karya Tech announces the acquisition of Georgia-based company Scientific Atlanta`
    },
    {
        date: '2010',
        content: `Cipta Karya Tech launches the CRS-3 Carrier Routing System`
    },
    {
        date: '2015',
        content: `John T. Chambers retires, as Cipta Karya Tech increasingly changes its emphasis from hardware to software`
    },
    {
        date: '2018',
        content: `Cipta Karya Tech agrees to buy AI-driven business intelligence startup Accompany for US$270 million`
    },

]

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

    // Timeline
    $('#my-timeline').roadmap(timelineContent, {
        prevArrow: `<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>`,
        nextArrow: `<i class="fa fa-arrow-circle-right" aria-hidden="true">`,
        eventsPerSlide: 4
    });

    // History Details
    $('.paragraph').hide();
    $('.history-details').click(() => {
        let display_attribute = document.getElementsByClassName('paragraph');
        let button = document.getElementsByClassName('history-details')[0];

        if (display_attribute[0].getAttribute('style') != "") {
            $('.paragraph').show('slow');
            button.innerHTML = "Show Less"
        }
        else {
            $('.paragraph').hide('slow');
            button.innerHTML = "Show More"
        }
    })
});
