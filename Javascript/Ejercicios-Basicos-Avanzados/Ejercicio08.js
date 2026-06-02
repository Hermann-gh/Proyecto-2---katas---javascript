/*
Buscar la palabra más larga: Completa la función que tomando un array de strings
como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud
deberá devolver el primero.
*/

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(avengers) {

    // Creamos una variable inicial para tener como referencia el primer elemento
    let personaje = avengers[0];

    //Recorremos el array de avengers
    for (let i = 0; i < avengers.length; i++ ) {
        /*
        Comprobamos la longitud del personaje actual
        con el personaje guardado mas largo
        */
        if (avengers[i].length > personaje.length) {
            /*
            Vamos actulizando el mas largo, en caso de coincidir
            se quedara el primero obtenido al ser del mismo tamaño
            */
            personaje = avengers[i];
        }
    }

    //Retornamos resultado
    return personaje;
}

//Imprimimos llamando a la funcion y metiendo como parametro nuestro array de Avengers
console.log(findLongestWord(avengers));