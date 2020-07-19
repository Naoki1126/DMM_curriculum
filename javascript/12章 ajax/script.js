// $(function(){

// 	$('.menu-trigger').on('click',function(){
// 		$(this).toggleClass('active');
// 		$('#sp-menu').fadeToggle();
// 		return false;
// 	});
// });

// $('#tab-contents .tab[id !="tab1"]').hide();

// $('#tab-menu a').on('click',function(){
// 	$("#tab-contents .tab").hide();
// 	$("#tab-menu .active").removeClass("active");
// 	$($(this).attr("href")).show();
// 	return false;
// });

// $(function(){
// 	$('#btn').on('click',function(){

// 		$.ajax({
// 			url:"http://api.openweathermap.org/data/2.5/weather?q="+$('#cityname').val()+"&units=metric&appid="+"9e3269e953120cd0ccb7161acd19c5fb",
// 			dataType:'jsonp',

// 		}).done(function(data){

// 			$('#place').text(data.name);
// 			$('#temp_max').text(data.main.temp_max);
// 			$('#temp_min').text(data.main.temp_min);
// 			$('#humidity').text(data.main.humidity);
// 			$('#speed').text(data.wind.speed);
// 			$('#weather').text(data.weather[0].main);
// 			$('img').attr("src","http://openweathermap.org/img/w/"+data.weather[0].icon+".png");
// 			$('img').attr("alt",data.weather[0].main);

// 		}).fail(function(data){
// 			alert('通信に失敗しました。');

// 		});
// 	});
// });

$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" +"9e3269e953120cd0ccb7161acd19c5fb",
      dataType:'jsonp',
    }).done(function (data){
        //通信成功
        // 位置
        $('#place').text(data.name);
        // 最高気温
        $('#temp_max').text(data.main.temp_max);
        // 最低気温
        $('#temp_min').text(data.main.temp_min);
        //　湿度
        $('#humidity').text(data.main.humidity);
        //　風速
        $('#speed').text(data.wind.speed);
        // 天気
        $('#weather').text(data.weather[0].main);
        // 天気アイコン
        $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
        $('img').attr("alt",data.weather[0].main);
    }).fail(function (data) {
       //通信失敗
　　　　alert('通信に失敗しました。');  
    });
  });
});