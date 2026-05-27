/*
1.1 En base al siguiente javascript, crea variables en base a las propiedades
del objeto usando object destructuring e imprimelas por consola. Cuidado,
no hace falta hacer destructuring del array, solo del objeto
*/

//Objeto
const game = {
    title: "The last of us 2",
    gender: ["Action","Zombie","Survival"],
    year: 2020
};

//Destructuring
const {title, gender, year} = game;

//Impresion
console.log("Titulo: ",title);
console.log("Generos: ",gender);
console.log("Año de salida: ",year);

/*
1.2 En base al siguiente javascript, usa destructuring para crear 3 variables
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.
*/


//Array de frutas
const fruits = ['Banana', 'Strawberry', 'Orange'];


//Destructuring
const [fruit1, fruit2, fruit3] = fruits;


//Impresion por consola
console.log(fruit1, fruit2, fruit3);

/*
1.3 En base al siguiente javascript, usa destructuring para crear 2
variables igualandolo a la función e imprimiendolo por consola.
*/


// Funcion
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'} 
};


//Destructuring
const {name, race} = animalFunction();


//Imporesion
console.log(name);
console.log(race);

/*
1.4 En base al siguiente javascript, usa destructuring para crear las
variables name y itv con sus respectivos valores. Posteriormente crea
3 variables usando igualmente el destructuring para cada uno de los años
y comprueba que todo esta bien imprimiendolo.
*/


//Objeto
const car = {carName: 'Mazda 6', itv: [2015, 2011, 2020] }


//Destructuring objeto
const {carName, itv} = car;


//Destructuring array años
const [itv1, itv2, itv3 ]= itv;


//Impresion por consola
console.log(name);
console.log(itv1);
console.log(itv2);
console.log(itv3);
