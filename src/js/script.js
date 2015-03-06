jQuery(window).load(function() {
   // Page Preloader
   jQuery('#status').fadeOut();
   jQuery('#preloader').delay(350).fadeOut(function(){
      jQuery('body').delay(350).css({'overflow':'visible'});
   });
});

//Aquí colocamos el PATH tanto para Huayra como para Windows
$(document).ready(function() {
	var OSPath="Unknown OS";
	
	if (navigator.appVersion.indexOf("Win")!=-1) 
		OSPath="file:///F:/recursos/";
	if (navigator.appVersion.indexOf("Linux")!=-1) 
		OSPath="file:///media/alumno/DATOS/recursos/";
	if (navigator.appVersion.indexOf("X11")!=-1) 
		OSPath="file:///media/alumno/DATOS/recursos/";

	$('.recurso-src').each(function(){
		$(this).attr('src',OSPath+$(this).attr('src'))
	});
	
	$('.recurso-poster').each(function(){
		$(this).attr('poster',OSPath+$(this).attr('poster'))
	});
	
	$('.recurso-href').each(function(){
		$(this).attr('href',OSPath+$(this).attr('href'))
	});
	
	$('.playlist').each(function(){
		$(this).attr('data-video',OSPath+$(this).attr('data-video'));
		$(this).attr('data-track',OSPath+$(this).attr('data-track'));
	});
});

