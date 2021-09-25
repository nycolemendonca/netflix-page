$('.owl-carousel').owlCarousel({
    loop:true, /* quando chegar ao último filme, o carrosel para */
    margin:10, /* margem entre os filmes */
    nav: false, /* navegador do carrossel (setas) */
    responsive:
    {
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})