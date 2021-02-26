var Http = require( 'http' );
var fs = require('fs');
var url = require('url')

var server = Http.createServer(function(request,response){
  var uri = (request.connection.encrypted ? 'https': 'http') + '://'
                        + request.headers.host + request.url;
  console.log(uri):
  var uri_parseada = url.parse(uri,true);
  console.log(uri_parseada);


// GET y ruta/ --> pagina1.html
// POST y ruta / --> pagina2.html
// GET y ruta /mensaje --> recurso.json

if (request.method=='GET') {
  if(url_parseada.path== "/"){
    fs.readFile('pagina1.html',function(err,datos){
      console.log('Mostrando pagina 1 . . . ');
      response.writeHead(200,"content.Type:text/html");
      response.write(datos);
      response.end();
    });
  }else {
  if (uri_parseada.path == "mensaje") {
    fs.readFile('recurso.json',function(err,datos){
      console.log('Mostrando pagina 2 . . . ');
      response.writeHead(200,"content.Type:text/json");
      response.write(datos);
      response.end();
    });

  } else {
    if (request.method=='POST') {
      fs.readFile('pagina2.html',function(err,datos){
        console.log('Mostrando pagina 2 . . . ');
    response.write("Nada que servir");
    response.end()};
  });
       else {

    }

  }

}

});


server.listen( 3000, function() {
console.log('Escuchando conexión en el puerto 3000');
});
