/*
grupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

Utiliza bucles para lograrlo e imprime el objeto final por consola.
*/

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

//Creamos objeto
const moviesByDecade = {};

//Recorremos con for of
for(let element of starWarsMovies){

    //Creamos constante de decada con el metodo Matc.floor redondeamos para finalmente cuadrar la decada al multiplicar
    const decade = Math.floor(element.releaseYear / 10) * 10;

    //Usamos if para crear la decada si no existe
    if(!moviesByDecade[decade]){
        //Guardamos resultado
        moviesByDecade[decade]= [];
    }
     //añadimos elemento de esa decada
        moviesByDecade[decade].push(element);
}

//imprimimos
console.log(moviesByDecade);