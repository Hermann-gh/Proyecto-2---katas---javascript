/*
1. Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos.

2. Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.
*/

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
    
    //Recorremos el array
    for (let i = 0; array.length > i; i++){
        //Si el contenido de el indice es igual al texto retonarmos el indicie
        if (array[i] === text){
            return i;
        }   
    }
    //Si no retornamos -1
    return -1;
}

//Llamadas a la funcion
console.log(findArrayIndex(mainCharacters, "Yoda"));
console.log(findArrayIndex(mainCharacters, "Rey"));


function removeItem(array, text) {

    //Creamos contante para guardar el indice
    const indice = findArrayIndex(array, text);
    //Si el indice es distinto a -1 borramos esa posicion
    if (indice !== -1){

         array.splice(indice,1);
    }
    //Dependiendo de si esta o no devolveremos el array original o ya modificado
    return array;

}

//Llamada a la funcion
console.log(removeItem(mainCharacters, "Yoda"));
console.log(removeItem(mainCharacters, "Rey"));