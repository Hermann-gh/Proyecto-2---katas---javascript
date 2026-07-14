/*
Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.

Que la función use el parametro para simular una tirada de dado y retornar el resultado.

Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random()
*/

//Creamos la funcion con Math.floor para reondear hacia abajo y Math.random para generar un numero aleatorio dependiendo del numero que queramos meter
function rollDice(caras){

    //Usamos el mas uno porque no queremos que salga 0 al rendondear y tambien podamos sacar el numero maximo del dado.
    return Math.floor((Math.random() * caras) +1)
}

console.log(rollDice(6));
console.log(rollDice(15));
