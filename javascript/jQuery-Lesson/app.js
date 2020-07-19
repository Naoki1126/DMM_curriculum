// $(function(){
// 	$('.box1').slideDown();
// 	$('.box1').css({'background-color':'#0000FF'});
// 	$('.box1').css({'width':'200px'});
// 	$('.box1').css({'height':'100px'});
// 	$('.box1').slideUp();
// });

// $(function(){
// 	$('.box1').slideDown(function(){
// 		$('.box1').css({
// 			'background-color':'#0000FF',
// 			'width':'200px',
// 			'height':'100px'
// 		}).slideUp();
// 	});
// });

// $(function(){
// 	$('.box1').mouseover(function(){
// 		$('.box1').addClass('box1-ext');
// 	});

// 	$('.box1').mouseout(function(){
// 		$('.box1').removeClass('box1-ext')
// 	})
// });

// // $(function(){
// 	$('.box1').on('click',function(){
// 		$('.box1').addClass('box1-ext');
// 	});

// 	$('.box1').mouseout(function(){
// 		$('.box1').removeClass('box1-ext');
// 	});
// });

// $(function(){
// 	$('.bg1').on('click',function(){
// 		$('.bg1').slideUp();
// 	});

// 	$('.bg2').on('click',function(){
// 		$('.bg2').slideUp();
// 	});

// 	$('.bg3').on('click',function(){
// 		$('.bg3').slideUp();
// 	});

// 	$('.bg4').on('click',function(){
// 		$('.bg4').slideUp();
// 	})

// });

// 

$(function(){
	$('button').on('click',function(){
		$('ul').children().css('color','red');
	});
});