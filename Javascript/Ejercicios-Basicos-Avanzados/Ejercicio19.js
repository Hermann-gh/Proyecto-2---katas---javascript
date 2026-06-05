/*
Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato (también podéis crear uno nuevo con solo los que NO incluyan esa palabra).

Recuerda usar la función .includes() para comprobar la palabra.

Puedes usar este array:
*/

const toys = [
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'LEGO'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

//Creamos array
const toysNoCats = [];

//Recorreomos con un for of
for (let element of toys){

    //Usamos if para añadir los elementos que no contenga gato
    //En el array nuevo
    if(!element.name.includes("gato")){
        toysNoCats.push(element);
    }
}

//Imprimimos array sin gatos
console.log(toysNoCats);
