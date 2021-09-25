$('.owl-carousel').owlCarousel({
    loop:true, /* quando chegar ao último filme, o carrosel reinicia */
    margin:10, /* margem entre os filmes */
    nav: false, /* navegador do carrossel (setas) */
    responsive:
    {
        0:{ /* pixels */
            items:1 /* números de boxes de filme */
        },
        600:{ /* pixels */
            items:3 /* números de boxes de filme */
        },
        1000:{ /* pixels */
            items:5 /* números de boxes de filme */
        }
    }
})