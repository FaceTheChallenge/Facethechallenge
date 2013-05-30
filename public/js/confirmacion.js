$(document).ready(function(){	
	//Si pulsamos sobre un elemento de la clase confirm se inicia este código:
	$('.confirm').click(function(){
		//Ventana de confirmación:
		$.confirm({
			'title'		: 'Confirmación requerida',
			'message'	: '¿Estás seguro de lo que vas a hacer?',
			'buttons'	: {
				'Si'	: {
					'class'	: 'blue',
					'action': function(){//Si acepta algo
					}
				},
				'No'	: {
					'class'	: 'gray',
					'action': function(){}	
				}
			}
		});
		
	});
	//Si pulsamos sobre un elemento de la clase visor se inicia este código:
	$('.visor').click(function(){
		console.log('Intento  ' +  $(this).find('.contenido').html());
		$.visor({
			'contenido'	: $(this).find('.contenido').html(),
			'buttons'	: {
				'Cerrar'	: {
					'class'	: 'gray',
					'action': function(){}	
				}
				
			}
		});
	});	
});