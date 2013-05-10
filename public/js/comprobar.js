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
// JavaScript Document