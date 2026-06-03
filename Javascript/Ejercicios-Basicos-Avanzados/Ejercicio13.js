/*
Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

Puedes usar este array para probar tu función:
*/

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, name) {
  
    for(let i = 0; i < nameList.length; i++){
        //Comparamos si hay nombre igual en el arrya
        //He usado el metodo de poner todo en minusculas para que sea sensible.
        if(nameList[i].toLowerCase() === name.toLowerCase()){
            return {Encontrado: true, Posicion: i};
        }
    }
    return false;
}

console.log(nameFinder(names,"German"));
console.log(nameFinder(names,"peter"));