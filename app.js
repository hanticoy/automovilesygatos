const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
    
    // así es como hacemos el enrutamiento
    if (request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // envía los datos sobre la respuesta
            response.write(contents);  //  envía el cuerpo de respuesta
            response.end(); // ¡terminado!
        });
    } else if (request.url === '/hojasestilos/styles.css') {
        fs.readFile('./hojasestilos/styles.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
           })
    
        } else if (request.url === '/gatos') {
        fs.readFile('./vistas/gatos.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // envía los datos sobre la respuesta
            response.write(contents);  //  envía el cuerpo de respuesta
            response.end(); // ¡terminado!
        });

    } else if(request.url === '/imagenes/gato1.jpg'){
        // observa que no vamos a incluir la codificación utf8
        fs.readFile('./imagenes/gato1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/imagenes/gato2.jpg'){
        // observa que no vamos a incluir la codificación utf8
        fs.readFile('./imagenes/gato2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/imagenes/gato3.jpg'){
        // observa que no vamos a incluir la codificación utf8
        fs.readFile('./imagenes/gato3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/imagenes/gato4.jpg'){
        // observa que no vamos a incluir la codificación utf8
        fs.readFile('./imagenes/gato4.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        }) 

    } else if (request.url === '/autos') {
        fs.readFile('vistas/autos.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // envía los datos sobre la respuesta
            response.write(contents);  //  envía el cuerpo de respuesta
            response.end(); // ¡terminado!
        });

    } else if(request.url === '/imagenes/auto1.jpg'){
        // observa que no vamos a incluir la codificación utf8
        fs.readFile('./imagenes/auto1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/imagenes/auto2.jpg'){
        // observa que no vamos a incluir la codificación utf8
        fs.readFile('./imagenes/auto2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/imagenes/auto3.jpg'){
        // observa que no vamos a incluir la codificación utf8
        fs.readFile('./imagenes/auto3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/imagenes/auto4.jpg'){
        // observa que no vamos a incluir la codificación utf8
        fs.readFile('./imagenes/auto4.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    
    } else if (request.url === '/autos/nuevo') {
        fs.readFile('./vistas/nuevos.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // envía los datos sobre la respuesta
            response.write(contents);  //  envía el cuerpo de respuesta
            response.end(); // ¡terminado!
        });
    }
    // la petición no coincidió con nada:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// dile a tu servidor qué puerto ejecutar
server.listen(7077);
// imprime a una ventana terminal
console.log("Running in localhost at port 7077");