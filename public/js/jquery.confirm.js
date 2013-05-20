(function($){
	/*Diseño completo de la ventana de confirmación:
	Al llamar a esta función tenemos que pasarle como parámetros:
	titulo, mensaje, botones a aparecer
	*/
	$.confirm = function(params){
		if($('#confirmOverlay').length){
			// A confirm is already shown on the page:
			return false;
		}
		var buttonHTML = '';
		$.each(params.buttons,function(name,obj){
			// Generating the markup for the buttons:
			buttonHTML += '<a href="#" class="button '+obj['class']+'">'+name+'<span></span></a>';
			if(!obj.action){
				obj.action = function(){};
			}
		});
		var markup = [
			'<div id="confirmOverlay">',
			'<div id="confirmBox">',
			'<h1>',params.title,'</h1>',
			'<p>',params.message,'</p>',
			'<div id="confirmButtons">',
			buttonHTML,
			'</div></div></div>'
		].join('');
		$(markup).hide().appendTo('body').fadeIn();
		var buttons = $('#confirmBox .button'),
			i = 0;
		$.each(params.buttons,function(name,obj){
			buttons.eq(i++).click(function(){
				//Cuando se hace el click se llama a la accióna tribuida y se esconde
				//la ventana de confirmación:
				obj.action();
				$.confirm.hide();
				return false;
			});
		});
	}
	$.confirm.hide = function(){
		$('#confirmOverlay').fadeOut(function(){
			$(this).remove();
		});
	}
})(jQuery);