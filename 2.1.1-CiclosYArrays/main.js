/* let i = 0;

while (i <= 10){
    console.log(i);
    i++;
}

let input = prompt("Por favor ingresa tu nombre");

while(input){
    console.log(input);
    input = prompt("Por favor ingresa tu nombre o deja la cajita en vacio para salir");
}*/

let numerosDivisibles = 0;
let numerosNoDivisibles = 0;
const numeroADividir = 24;

for(let i = 0; i < 100; i++){
    if(i % numeroADividir === 0){
        numerosDivisibles++;
    } else {
        numerosNoDivisibles++;
    }
}

console.log("Del 0 al 100 existen: " + numerosDivisibles + " números divisibles y " + numerosNoDivisibles + " números no divisibles entre " + numeroADividir);

const frutas = ["fresa", "platano", "manzana"];

const frutas2 = ["fresa", "platano", "manzana", 'kiwi'];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

let listaAEvaluar = [];
let sonIguales = true;

if(frutas.length > frutas2.length){
    listaAEvaluar = frutas;
} else {
    listaAEvaluar = frutas2;
}

for(let i = 0; i < listaAEvaluar.length ; i++){
    if(frutas[i] !== frutas2[i]){
        sonIguales = false;
    }
}

console.log(sonIguales);

