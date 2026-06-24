/*
Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array y guarda su nombre en una variable.

Imprime el nombre por consola.
*/

const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

//Creamos variable
let oldestCartoon = cartoons[0];

// Usamos bucle para recorrer el array
for (let i = 0; i < cartoons.length; i++){
    //Con el if incluimos condicion
    if(oldestCartoon.debut > cartoons[i].debut){
        //Directamente machacomos con el resultado
        oldestCartoon = cartoons[i];
    }
}

console.log(oldestCartoon);