const express = require("express");
const app = express();

app.listen(4000,(erro => (erro ? 
    console.log("Ocorreu um erro") : console.log("Servidor iniciado com sucesso!"))))