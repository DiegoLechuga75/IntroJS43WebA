const persona = {
    nombre: "Diego",
    apellido: "Lechuga",
    edad: 21,
    esMayorDeEdad: true,
    email: "diego@gmail.com",
    pasatiempos: ["Videojuegos", "Gym", "Guitarra"],
    mascota: {
        nombre: "Tigger",
        especie: "Gato"
    }
}

console.log("Hola me llamo " + persona.nombre + " " + persona["apellido"]);


class Libro {
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }

    info(){
        console.log(`${this.titulo}, ${this.autor}`);
    }
}

const libro1 = {
    titulo: "1984",
    autor: "Orwell",
    info(){
        console.log(`${this.titulo}, ${this.autor}`);
    }
}

const libro2 = {
    titulo: "Quijote",
    autor: "Cervantes",
    info(){
        console.log(`${this.titulo}, ${this.autor}`);
    }
}


const libroA = new Libro("1984", "Orwell");

const libroB = new Libro("Quijote", "Cervantes");

libro1.info();

libroA.info();

libroB.info();

for(let key in libroA){
    console.log(`${key}: ${libroA[key]}`);
}


const { nombre, apellido, edad } = persona;

console.log(nombre);

console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} años`);