 $(document).ready(function(){
 	$(window).scroll(function() {
 		//==============Смена цвета гамбургера==============//
 		var scrollTop = $(window).scrollTop();
 		var offsetMenu = $('.header__menu').offset().top;
 		var heroHeight = $('.hero').height();
 		if(offsetMenu > heroHeight) {
 			$('.header__menu').addClass('black'); 
 		}else {
 			$('.header__menu').removeClass('black'); 
 		}
 		//==============Смена цвета гамбургера==============//

 		
 		$('.hero').bgscroll();
 		// $('.hero').css('background-size', '10' + parseInt(scrollTop / 70, 0) + '% ');
	});
	
	new WOW().init();
 });