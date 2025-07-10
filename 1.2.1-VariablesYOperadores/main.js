let numero = 10;

console.log(numero);

numero = 20;

console.log(numero);

let temperaturaActual;

const pi = 3.14159;

console.log(pi);

console.log((pi * 10));

console.log(548 % 5);


numero -= 10;

console.log(numero);

console.log(10 == "10");

console.log(10 === "10");

console.log(20 != 15);

console.log(20 !== 15);

console.log(30 > 24);

console.log(30 < 15);

console.log(30 >= 30);

console.log(35 <= 38);

let cardPoints = 2000;
let esDeudor = true;
let esCliente = true;

if((cardPoints > 500 && !esDeudor) || esCliente){
    console.log("Usted puede tener una tarjeta");
} else {
    console.log("Lo sentimos no podemos ofrecerle una tarjeta");
}


/* let nombre = prompt("Por favor, ingresa tu nombre:", "");
let edad = prompt("Por favor, ingresa tu edad:", "");
let traerDocumentacion = parseInt(prompt("traes tu documentacion?: 0=no, 1=si", ""));
if (edad>18 && traerDocumentacion===1){
    console.log(nombre+" usted esta habilitado para votar")
}else{
    console.log(nombre+" usted no cumple con los requisitos para votar")
} */

/* let nacionalidad = "mexicano";
let edad = 12;
let ine = true;

if (nacionalidad === "mexicano" && edad >=18 && ine) {
  console.log("usted puede votar")
} else {
  console.log("Lo sentimos, usted no puede votar")
} */

let nacionalidadBoliviana = true;
let edad = 18;
let empadronado = true;
let ciVigente = true;
if (cardPoints >= 18 && nacBol && Empadronado && CIvigente) {
    console.log("Su recinto para votar ha sido asignado");
    
}
else{
    console.log("Usted no cuenta con los requisitos para votar");
    }

