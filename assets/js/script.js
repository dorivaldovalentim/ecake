$('#slick-slide').slick({
	slidesToShow: 4,
	slidesToScroll: 2,
	rows: 2,
	prevArrow: `
		<a class="carousel-control-prev text-dark" href="#" role="button" data-slide="prev">
			<i class="icon fa-2x fa fa-angle-left text-dark" aria-hidden="true"></i>
			<span class="sr-only">Anterior</span>
		</a>`,
	nextArrow: `
		<a class="carousel-control-next text-dark" href="#" role="button" data-slide="next">
			<i class="icon fa-2x fa fa-angle-right text-dark" aria-hidden="true"></i>
			<span class="sr-only">Próximo</span>
		</a>`,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 769,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 600,
			settings: {
				rows: 1,
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 480,
			settings: {
				rows: 1,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		
	]
	
});