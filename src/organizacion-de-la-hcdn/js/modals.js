 $( document ).ready(function() {

	$("img.efecto,a.efecto").click(function() {
		var p_description = $("."+$( this ).attr( "data-modal" )).html();
		var p_height = $( this ).attr( "data-height" );
		var p_width = $( this ).attr( "data-width" );
		var p_top = $( this ).attr( "data-top" );
		var p_left = $( this ).attr( "data-left" );	
		var p_top_c = $( this ).attr( "data-top_c" );
		var p_left_c = $( this ).attr( "data-left_c" );

		add_block_page();
		add_popup_box();
		add_styles();
		
		$('.paulund_modal_box').fadeIn();

		/**
		 * Add styles to the html markup
		 */
		 function add_styles(){			
			$('.paulund_block_page').css({
				'position':'absolute',
				'top':'0',
				'left':'0',
				'background-color':'rgba(245, 244, 244, 0.61)',
				'height':'100%',
				'width':'100%',
				'z-index':'10'
			});
			$('.paulund_inner_modal_box').css({
				'height': '100%',
				'width': '100%'
			});
		}
		
		 /**
		  * Create the block page div
		  */
		 function add_block_page(){
			var block_page = $('<div class="paulund_block_page"></div>');
						
			$(block_page).appendTo('body');
		}
		 	
		 /**
		  * Creates the modal box
		  */
		 function add_popup_box(){
			 var pop_up = $('<div class="paulund_modal_box"><a href="#" class="paulund_modal_close"></a><div class="paulund_inner_modal_box">' + p_description + '</div></div>');
			 $(pop_up).appendTo('.paulund_block_page');
			 			 
			 $('.paulund_modal_close').click(function(){
				$(this).parent().fadeOut().remove();
				$('.paulund_block_page').fadeOut().remove();				 
			 });
		}

		return this;
		
	});
 });   