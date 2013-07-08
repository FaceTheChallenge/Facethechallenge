var request = new XMLHttpRequest();

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

function retar() {		
		
		if (document.getElementById("fechaInicio").value = " " || document.getElementById("fechaInicio").length<10){ //Está vacio, vamos a CREAR un reto nuevo.
			var dificultad = document.getElementById('dificultad').value;
			var categoria = document.getElementById('categoria').value;
			var idReto = document.getElementById("idR").value;
			var puntos = document.getElementById("puntuacion").value;
			var info = document.getElementById("infoReto").value;
			
			var peticion = "/crearReto/"+dificultad+"/"+categoria+"/"+idReto+"/"+puntos+"/"+info;
		request.open('POST',peticion,true);
		request.onreadystatechange=alert('Reto creado.\n\n Espera mientras te redirigimos...');
		request.send(null);
		
		setTimeout('document.location = "/pagPrincipal"',2000);
		}
		
}
