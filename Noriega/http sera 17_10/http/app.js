var http = require('http');

http.createServer(function(requisicao,resposta){
    resposta.end("<h1>Bem vindo</h1><h4>programacao</h4>")
}).listen(8181);
console.log("Meu servidor está rodando")
