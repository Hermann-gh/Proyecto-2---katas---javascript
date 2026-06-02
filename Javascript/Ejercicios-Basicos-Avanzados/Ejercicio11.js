/*
Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

Puedes usar este array para probar tu función:
*/

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
  
    let total = 0;

    //Usamos un for of para recorrer los elementos
    for (const elements of list){
        //Bucle if para filtrar si es numero o string
        //Si es numero sumamos valor, si es sting sumamos longitud
        if (typeof elements === "number"){
            total += elements;
        } else if (typeof elements === "string") {
            total += elements.length;
        }
    
    }
        //Retornamos total.
        return total;
}

//Imprimimos por consola
console.log("El total de numeros mas caracteres es ", averageWord(mixedElements));