var request = new XMLHttpRequest();

function comprobar()
{
   var nombre = document.registroform.name.value;
   var email = document.registroform.email.value;
   alert("Te has registrado con el nombre:  " + nombre + "\n\n Email de registro:  " + email);
   
   var intento = $(':text');
   var cadena = 'Datos ingresados:\n ';
   for (var i=0 ; i<intento.length ; i++){
	   cadena = cadena + '\n' + $(intento[i]).val()
   }

   alert(cadena);
   return true;
}

	function obtenValores(){
	//Voy a ir recogiendo todos los valores del campo para enviarlos como una cadena JSON
		var nombre = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var user = document.getElementById('username').value;
		var pass = document.getElementById('password').value;
		var repass = document.getElementById('repassword').value;

		var sex = document.getElementById('gender').value;
		//Pongo el sexo del usuario como texto
		if (sex == "m"){sex = "Masculino";}
		else{sex = "Femenino";}

		var mes = document.getElementById('BirthMonth').value;
		var dia = document.getElementById('BirthDay').value;
		var anio = document.getElementById('BirthYear').value;
		
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
	
		var movil = document.getElementById('phone').value;

		var f = new Date();
		var fechaRegistro = f.getDate() + "-" + (f.getMonth() +1) + "-" + f.getFullYear();
		
		//Ahora, para enviar los datos, compruebo por ejemplo que el password está bien repetido:
		if (pass==repass){
		var peticion = "http://localhost:3000/registrar/"+nombre+"/"+sex+"/"+nacimiento+"/"+email+"/"+user+"/"+pass+"/"+fechaRegistro+"/"+movil;

		request.open('GET',peticion,true);
		request.onreadystatechange=alert('¡¡Bienvenido!!\n\n¡¡Eres un valiente!!');
		var html = "<body><script type='text/javascript'>window.location='http://localhost:3000/pagInicio';</script></body>";
		request.send(html);

		}
		else{alert('Eh!! La clave no coincide!!');}
		
		
}

// JavaScript Document
