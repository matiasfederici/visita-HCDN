document.createElement('video');
document.createElement('audio');
document.createElement('track');



$(document).ready(function() {
	var myPlayer_1;
	var myPlayer_2;
	
	if( $(window).height() <= 442 && $(window).width() <=1022 )
	{
		var width_reproductor = 350;
		var height_reproductor = 150;
	}
	else
	{
		var width_reproductor = 400;
		var height_reproductor = 175;
	}
	
	$('#example_video_1').attr( "width", width_reproductor );
	$('#example_video_1').attr( "height", height_reproductor );
	
	$('#example_video_2').attr( "width", width_reproductor );
	$('#example_video_2').attr( "height", height_reproductor );
	
	videojs("example_video_1").ready(function(){
		myPlayer_1 = this;
		$('#example_video_1').find('.vjs-big-play-button').remove();
	});

	videojs("example_video_2").ready(function(){
		myPlayer_2 = this;
		$('#example_video_2').find('.vjs-big-play-button').remove();
	});
	
	videojs("example_video_1").on("firstplay", function(){
		if(!myPlayer_1.isFullscreen() )
			myPlayer_1.addClass('vjs-fullscreen');
	});
	
	videojs("example_video_2").on("firstplay", function(){
		if(!myPlayer_2.isFullscreen() )
			myPlayer_2.addClass('vjs-fullscreen');
	});
});