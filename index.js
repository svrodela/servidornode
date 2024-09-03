const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

//crear el servidor con el estado 200 y texto plano
const server = http.createServer((req,res)=>{
    res.statusCode = 200 //ok
    res.setHeader('Content-Type','text-plain')
    res.end("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Ejemplo html</title></head><body><h1>Encabezado</h1><p>parrafo de texto</p></body></html>")
})
// mandar llamar el servidor
server.listen(port, hostname,()=>{
    console.log('el servidor node está corriendo en http://127.0.0.1:3000')
})







