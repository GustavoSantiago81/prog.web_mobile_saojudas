const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("<h1>Bem vindo</h1>");
});

app.get("/blog", function(req,res){
    res.send("<h1>Bem vindo ao blog</h1>");
});

app.get("/canal/youtube", function(req,res){
    res.send("<h1>Bem vindo ao canal</h1>");
});

app.listen(4000,(erro => (erro ? 
    console.log("Ocorreu um erro") : console.log("Servidor iniciado com sucesso!"))))