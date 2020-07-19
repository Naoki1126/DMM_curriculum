$("document").ready(function() {
    $(".theTarget").skippr();
});

// オプションを指定してSkipprの実行
$(".theTarget").skippr({
	// スライドショーの変化(fade or slide)
	transition : 'fade',
	// 変化にかかる時間
	speed : 1000,
	// easingの追加
	easing :'easeOutQuart',
	// ナビゲーションの形(block or bubble)
	navType : 'block',
	// 子要素の種類(div or img)
	childrenElementType : 'div',
	// ナビゲーション矢印の表示 (trueで表示)
	arrows: true,
	// スライドショーの自動再生(falseで自動再生なし)
	autoPlay : true,
	// 自動再生時のスライド切替間隔(ミリ秒)
	autoPlayDuration : 1000,
	// キーボードの矢印キーによるスライド送りの設定(trueで有効)
	keyboardOnAlways : true,
	// 1枚目のスライド表示時に戻る矢印を表示するかどうか(falseで表示)
	hidePrevious : false


});

$(function(){

	$('#back a').on('click',function(){
		$('body.html').animate({
			scrollTop:0
		},800);
		return false;
	});
});