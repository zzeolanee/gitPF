$(function(){
	var $imgG = $('.imgG');
	var $btn = $('.btnG > li');
	var liw = $imgG.children('li').css('width');
	liw = parseInt(liw);
	var n = 0;
	

	$imgG.css({marginLeft: -liw});
	
	$('.right').click(function(){
			liw = $imgG.children('li').css('width');
			var marginL = $imgG.css('margin-left');
			marginL = parseInt(marginL);
			liw = parseInt(liw);
			$imgG.stop().animate({marginLeft:marginL+liw}, function(){
				$imgG.css({marginLeft: -liw});
				$('.imgG>li:last').prependTo($imgG);
			});

			n = (n - 1) % 4;
			$btn.eq(n).addClass('on').siblings().removeClass('on');

	});
	
	$('.left').click(slide);
		function slide(){
			var marginL = parseInt( $imgG.css('margin-left') );
			$imgG.stop().animate({marginLeft:marginL-liw}, function(){
				$imgG.css({marginLeft: -liw});
				$('.imgG>li:first').appendTo($imgG);
			});

			n = (n + 1) % 4;
			$btn.eq(n).addClass('on').siblings().removeClass('on');
	}


	var autoPlay = setInterval(slide, 2000);

	$('.main').hover(function(){
		clearInterval(autoPlay);
	}, function(){
		autoPlay = setInterval(slide, 2000);
	});

});	