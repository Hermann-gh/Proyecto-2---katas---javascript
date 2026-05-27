//1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.

console.log("Ejercicio 1.1");
for (let index = 0; index < 10; index++){
    console.log(index);
}

/*
1.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo
cuando el resto del numero dividido entre 2 sea 0.
*/

console.log("\n","Ejercicio 1.2");
for (let index = 0; index < 10; index++){
    if (index%2 === 0){
    console.log(index);
    }
}

/*
1.3 Crea un bucle para conseguir dormir contando ovejas.
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
y cambia el mensaje en la décima vuelta a '¡Dormido!'.
*/

console.log("\n","Ejercicio 1.3");

for (let l = 1; l < 11; l++){
    if (l === 10){
        console.log('¡Dormido!');
    } else {
        console.log('Intentando dormir 🐑');
    }
}
