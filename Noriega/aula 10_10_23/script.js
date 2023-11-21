var mostrarSite = true;
const site = "www.usjt.com"

console.log("ola");

console.log(Date())

let state = true;

if(mostrarSite){
    console.log(site);
}

function soma(a, b){
    return a+b;
}

function mult(a, b){
    return a*b;
}

function sub(a, b){
    return a-b;
}

function div(a, b){
    return a/b;
}

console.log(soma(10,20));
var resultadosMult = mult(10, 20);
console.log(resultadosMult);
console.log(sub(10,20));
var resultadosDiv = (div(10,20));
console.log(resultadosDiv);

for (var i = 0; i <= soma(10, 20); i++){
    console.log("Olá, senhor nº" + i)
}
while(!state){
    console.log("meu nome é Gustavo")
}

