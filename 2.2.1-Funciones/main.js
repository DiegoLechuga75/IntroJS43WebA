function suma(numero1, b){
    return numero1 + b;
}

let resultado = suma(6, 10);

console.log(resultado);

function saludo(nombre){
    return 'Holaaa, ' + nombre;
}

let mensaje = saludo('Diego');

console.log(mensaje);


function palabraMasLargaEnUnArreglo (arregloDePalabras) {
    let palabraMasLarga = '';
    for(let i = 0; i < arregloDePalabras.length; i++){
        if(palabraMasLarga.length < arregloDePalabras[i].length){
            palabraMasLarga = arregloDePalabras[i];
        }
    }
    return palabraMasLarga;
}

let frutas = ['manzana', 'pera', 'mango', 'fresa'];


let nombreFruta = palabraMasLargaEnUnArreglo(frutas);

console.log(nombreFruta);


let nombres = ['Marian', 'Ana', 'Diego', 'Lalo', 'Hannah'];

let nombreMasLargo = palabraMasLargaEnUnArreglo(nombres);

console.log(nombreMasLargo);

const invertirPalabra = (palabra) => {
    let palabraInvertida = '';
    for(let i = palabra.length - 1; i >= 0; i--){
        palabraInvertida = palabraInvertida + palabra.charAt(i);
    }
    return palabraInvertida;
}

console.log(invertirPalabra("Perro"));

console.log(invertirPalabra("Gato"));

console.log(invertirPalabra("Esternocleidomastoideo"));


const saludoFlecha = () => "Holaaa";

console.log(saludoFlecha());

const sumaFlecha = (a, b) => a + b;


console.log(sumaFlecha(5, 10));
