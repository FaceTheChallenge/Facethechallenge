var request = new XMLHttpRequest();

//Función para obtener los datos del usuario en el registro del mismo:
function obtenValores(){
	//Voy a ir recogiendo todos los valores del campo para enviarlos como una cadena JSON, comprobando que todos los campos están rellenos:
	var envia = 0;
	
	//Compruebo el nombre
	if (document.getElementById('name').value == ""){
		alert('Debes poner tu nombre');
		envia = 0;
		document.getElementById('name').focus();
		return false;
		}
	else{
		var nombre = document.getElementById('name').value;
		envia = 1;
	}
	
	//Compruebo el e-mail
	if (document.getElementById('email').value == ""){
		alert('Debes poner tu dirección de correo')
		envia = 0;
		document.getElementById('email').focus();
		return false;
	}	
	else{
		var email = document.getElementById('email').value;
		envia = 1;
	}
	
	//Compruebo el nombre de usuario
	if (document.getElementById('username').value == ""){
		alert('Debes elegir un nombre de usuario');
		document.getElementById('username').focus();
		envia = 0;
		return false;
	}	
	else{
		var user = document.getElementById('username').value;
		envia = 1;
	}
	
	//Compruebo el password
	if (document.getElementById('password').value == ""){
		alert('Debes elegir una clave');
		document.getElementById('password').focus();
		envia = 0;
		return false;
	}	
	else{
		var pass = document.getElementById('password').value;
		envia = 1;
	}
		var repass = document.getElementById('repassword').value;
	
		var sex = document.getElementById('gender').value;
		//Pongo el sexo del usuario como texto
		if (sex == "m"){sex = "Masculino";}
		else{sex = "Femenino";}

	//Compruebo la fecha de nacimiento
	if (document.getElementById('BirthMonth').value == "" || document.getElementById('BirthDay').value == "" || document.getElementById('BirthYear').value == ""){
		alert('Fecha de nacimiento incorrecta');
		document.getElementById('BirthMonth').focus();
		envia = 0;
		return false;
	}	
	else{
		var mes = document.getElementById('BirthMonth').value;
		var dia = document.getElementById('BirthDay').value;
		var anio = document.getElementById('BirthYear').value;
		envia = 1;
	}
	
		//Pongo el mes con nombre
		if (mes == "01"){mes = "Enero";}
		if (mes == "02"){mes = "Febrero";}
		if (mes == "03"){mes = "Marzo";}
		if (mes == "04"){mes = "Abril";}
		if (mes == "05"){mes = "Mayo";}
		if (mes == "06"){mes = "Junio";}
		if (mes == "07"){mes = "Julio";}
		if (mes == "08"){mes = "Agosto";}
		if (mes == "09"){mes = "Septiembre";}
		if (mes == "10"){mes = "Octubre";}
		if (mes == "11"){mes = "Noviembre";}
		if (mes == "12"){mes = "Diciembre";}
	
		//Obtengo la fecha de nacimiento completa
		var nacimiento = dia + "-" + mes + "-" + anio;
	
	//Compruebo el telefono movil
	if (document.getElementById('phone').value.length < 9 || isNaN(document.getElementById('phone').value)){
		alert('Tu móvil debe contener 9 números');
		document.getElementById('phone').focus();
		envia = 0;
		return false;
	}	
	else{
		var movil = document.getElementById('phone').value;
		envia = 1;
	}

		var f = new Date();
		var fechaRegistro = f.getDate() + "-" + (f.getMonth() +1) + "-" + f.getFullYear();
		
		//Ahora, para enviar los datos, compruebo por ejemplo que el password está bien repetido:
		if (pass==repass){
			if (envia == 1){
				pass = md5(pass);
				var peticion = "/registrar/"+nombre+"/"+sex+"/"+nacimiento+"/"+email+"/"+user+"/"+pass+"/"+fechaRegistro+"/"+movil;
				request.open('POST',peticion,true);
				request.onreadystatechange=alert('¡¡Bienvenido!!  ¡¡Eres un valiente!!\n\n Espera mientras te redireccionamos al inicio...');
				request.send(null);
		
				setTimeout('document.location = "/pagInicio"',2000);
			}
		}
		else{alert('Eh!! La clave no coincide!!');}
		
		
}

//Función para obtener los valores al crear un grupo:
function obtenValoresGrupo(){
	var valido = true;
 	var campos = $(':text');
 	var peticion = "/crear";
 	for (var i=0 ; i<campos.length ; i++){
	   peticion = peticion + "/" + $(campos[i]).val();
	  
	   //Si un campo está vacío
	   if( $(campos[i]).val().length == '0'){
		   valido = false;
		   
		}
	      }
	//Si todos los campos están rellenos:
	if(valido == true){
		//Tomamos las opciones de los selectores:
		var privacidad = $('select#privacidad').val();
		var periodo = $('select#periodo').val();
		var privacidadReto = $('select#privacidadReto').val();
		//Tomamos la fecha actual:
		var f = new Date();
		var fechaCreacion = f.getDate() + "-" + (f.getMonth() +1) + "-" + f.getFullYear();
		peticion = peticion + "/" + privacidad + "/" + periodo + "/" + privacidadReto + "/" + fechaCreacion;
		
				request.open('POST',peticion,true);
				request.onreadystatechange=alert('Grupo creado correctamente');
				request.send(null);
				//Borramos el formulario:
				for (var i=0 ; i<campos.length ; i++){
					 $(campos[i]).val("");
				}
				//Volvemos a la página principal de grupos
				setTimeout('document.location = "/gruposInfo"',1000);
		}else{
			alert('Todos los campos deben estar'+'\n'+'rellenos para la creación del grupo');
		}
}

//Función para obtener los valores al crear un reto:
function obtenValoresReto(){
	var valido = true;
 	var campos = $(':text');
 	var peticion = "/nuevoreto";
 	for (var i=0 ; i<campos.length ; i++){
	   peticion = peticion + "/" + $(campos[i]).val();
	  
	   //Si un campo está vacío
	   if( $(campos[i]).val().length == '0'){
		   valido = false;
		   
		}
	      }
	//Si todos los campos están rellenos:
	if(valido == true){
		//Tomamos las opciones de los selectores:
		var dificultad = $('select#dificultad').val();
		var categoria = $('select#categoria').val();
		var puntuacion = $('select#puntuacion').val();
		//Tomamos la fecha actual:
		var f = new Date();
		var fechaCreacion = f.getDate() + "-" + (f.getMonth() +1) + "-" + f.getFullYear();
		peticion = peticion + "/" + dificultad + "/" + categoria + "/" + puntuacion + "/" + fechaCreacion;
		
				request.open('POST',peticion,true);
				request.send(null);
				request.onreadystatechange=alert('Reto creado correctamente');
				//Borramos el formulario:
				for (var i=0 ; i<campos.length ; i++){
					 $(campos[i]).val("");
				}
		}else{
			alert('Todos los campos deben estar'+'\n'+'rellenos para la creación del reto');
		}
}

function cambio(url,s){
		var iframe=$('#centro');
		iframe.attr('src',url);
		iframe.attr('height',s);
		$('#clsImagen').css('height',s);
	}
	
//Método para obtener los datos de un usuario:
function obtenerUsuario(nick){
	//Cambiamos el contenido del iframe:
	//Versión para el servidor (sin .html):
	cambio('perfil','700px');
	//Hacemos la petición:
	var peticion = "/perfil/" + nick;
	request.open('POST',peticion,true);
	//Vemos la respuesta del servidor para informar al usuario:
	request.onreadystatechange= function(){
		if ( request.readyState == 4 && request.status == 200) {
			eval("var objeto = ("+request.responseText+")");
			alert("Tus datos de perfil actuales son: \nUsuario:  " + objeto.rows[0].key + "\nNombre:  " + objeto.rows[0].value.nombre);		
		}
	}
	request.send(null);
}
