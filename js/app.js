$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:true,
    // autoplay: true,
    // autoplayTimeOut: 1000,
    // stagePadding: 20,
    responsive:{
        0:{
            items:1 //like media query
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})