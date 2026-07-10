/*
Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

Considera el caso de múltiples mutantes con el mismo poder.
*/

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' },
  { name: 'Hermann', power: 'steel skin'}
];

function findMutantByPower(mutants, power) {

    //Creamos variable para guardar mutantes
    let encontrado =[];

    //Recorremos el array 
    for(let mutant of mutants){

        //filtramos si el poder es el mismo que el de algun mutante, si es lo guardamos en una variable.
        if(mutant.power === power){
            encontrado.push(mutant);
        }
    }

    //Cuando lo hayamos recorrido entero comprobamos si esta vacio y mostramos respuesta.
    if (encontrado.length === 0){
        return "No hay ningun mutante con ese poder";
    }
    //Si lo esta saldra por el primer retunr y si no enviaremos nuestro array como salida.
    return encontrado;
  
}

//Llamada a la funcion.
console.log(findMutantByPower(mutants, 'steel skin'));
console.log(findMutantByPower(mutants, 'supervelocidad'));
