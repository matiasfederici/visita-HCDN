jQuery(window).load(function() {
   // Page Preloader
   jQuery('#status').fadeOut();
   jQuery('#preloader').delay(350).fadeOut(function(){
      jQuery('body').delay(350).css({'overflow':'visible'});
   });
});


document.onkeydown = function(e) {
  // si pulsa la tecla ESC alterna entre ventana y pantalla completa.
  if (e.keyCode === 27) {
    var gui = require('nw.gui');
    var win = gui.Window.get();
    win.toggleFullscreen();
  }



  // Si pulsa la tecla "i" abre las herramientas de desarrollo.

};




//Aquí colocamos el PATH tanto para Huayra como para Windows
$(document).ready(function() {
	var OSPath="Unknown OS";
	
	if (navigator.appVersion.indexOf("Win") != -1) 
		OSPath="file:///F:/recursos/";

	if (navigator.appVersion.indexOf("Linux") != -1) 
		OSPath="file:///home/alumno/proyectos/recursos/";
		//OSPath="file:///media/alumno/DATOS/recursos/";

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

