/*
Cargamos el módulo que necesitamos y llamamos a la función createServer 
que nos retorna un objeto con el servidor web que utilizaremos para 
escuchar las peticiones y responderlas
*/
var express = require('express');
var app = module.exports = express.createServer();

//Configuración:
/*
Establecemos los directorios que usaremos:
	Primero establecemos el directorio /views como repositorio de templates, para ello usamos una variable definida globalmente en tiempo de ejecución de node.js que es __dirname cuyo valor es un string con el path absoluto del directorio de nuestra app
*/
app.configure(function(){
    app.set('views', __dirname + '/views');
	//"ejs" como nuestro motor para renderizar los templates, para ello recordemos intalar el módulo vía npm (npm install ejs)
    app.set('view engine', 'ejs');
    app.set('view options', {
    	layout: false
	});
	
	//express.bodyParser() es utilizado para el parseo de los post (sean json o no) y nos devuelve el resultado del parsea accesible vía la variable req.body
    app.use(express.bodyParser());
    app.use(express.methodOverride());
	//uso de app.router que contiene todas las rutas definidas, y realiza consulta de rutas basándose en la URL de la solicitud actual y el método HTTP
    app.use(app.router);
	//Declaramos el directorio desde donde proveemos nuestro contenido estático, esto nos permite acceder a nustros recursos (dentro del directorio public) directamente referenciandolo como <link href="/css/style.css" rel="stylesheet" type="text/css"></link>
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Rutas

app.get('/',function(req,res){
    res.render("pagInicio",{});
});
app.get('/pagInicio',function(req,res){
    res.render("pagInicio",{});
});
app.get('/pagRegistro',function(req,res){
    res.render("pagRegistro",{});
});
app.get('/Reto',function(req,res){
    res.render("Reto",{});
});
app.get('/pagPrincipal',function(req,res){
	res.render("pagPrincipal",{
    	title: "pag Principal",
    	banner: "Página Principal FtC"
    });
});

app.get('/indexNotificaciones',function(req,res){
	res.render("indexNotificaciones",{});
});

app.listen(3000);
//console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
console.log("Servidor listo");
