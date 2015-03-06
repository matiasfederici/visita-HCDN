document.createElement('video');
document.createElement('audio');
document.createElement('track');



$(document).ready(function() {

	var myPlayer;

	if( $(window).height() <= 442 && $(window).width() <=1022 )
	{
		var width_reproductor = 350;
		var height_reproductor = 250;
	}
	else
	{
		var width_reproductor = 400;
		var height_reproductor = 250;
	}
	
	$('#example_video_1').attr( "width", width_reproductor );
	$('#example_video_1').attr( "height", height_reproductor );
	
	videojs("example_video_1").ready(function(){
		myPlayer = this;
		$('#example_video_1').find('.vjs-big-play-button').remove();
	});
	
	videojs("example_video_1").on("firstplay", function(){
		if(!myPlayer.isFullscreen() )
			myPlayer.addClass('vjs-fullscreen');
	});
});