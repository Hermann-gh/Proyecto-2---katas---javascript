/*
Usa un bucle para crear 3 arrays de películas filtrados por categorías.

Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.

Imprime cada array por consola.
*/

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const moviesShort = [];
const moviesMedium = [];
const moviesLong = [];

//recorremos con un for of cada elemento
for (let element of movies){
    //Con if "filtramos" y posteriormente añladimos al array correspondiente
    if (element.durationInMinutes < 100){
        moviesShort.push(element);
    } else if (element.durationInMinutes > 100 && element.durationInMinutes < 200){
        moviesMedium.push(element);
    } else {
        moviesLong.push(element);
    }
}

//imprimimos
console.log("Pelicuilas cortas: ");
console.log(moviesShort);
console.log("Pelicuilas medianas: ");
console.log(moviesMedium);
console.log("Pelicuilas largas: ");
console.log( moviesLong);