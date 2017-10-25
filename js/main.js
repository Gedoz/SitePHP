function AdicionaClasseBarraPesquisa(){
	if ($('#body').hasClass('header-barraBusca-visivel')){
		$('#body').removeClass('header-barraBusca-visivel');
		$('#busca').css('background-color', '#fff');
		$('#busca > svg > path').css('fill', 'black');
	}else{
		$('#body').addClass('header-barraBusca-visivel');	
		$('#busca').css('background-color', '#333');
		$('#busca > svg > path').css('fill', 'white');
	}	
}

$('#loko, #loko2').on('click', function(e){
    e.preventDefault();
    console.log(e);
    var target= $(this).get(0).id == 'sobre' ? $('.loko') : $('#sobre');
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 1000);
});

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

	$('.carousel-home').slick({
		dots: true,
		infinite: true,
		speed: 400,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		arrows: false,
	});

});



