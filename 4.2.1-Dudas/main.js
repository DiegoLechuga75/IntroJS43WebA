const frutas = ["Manzana", "Pera", "Mango", "Fresa", "Sandia"];


function handleForEach(fruta, index){
    console.log(`${fruta} esta en el indice: ${index}`);
}


frutas.forEach((fruta, index) => handleForEach(fruta, index));