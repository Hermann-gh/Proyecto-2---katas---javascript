/*
Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".
*/

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const mayorEdad = ["Usuario mayores de edad:"];
const menorEdad = ["Usuario menores de edad:"];

//usamos for of junto if para separar segun condicion del elemento.
for (let element of users){
    if(element.years >= 18){
        mayorEdad.push(element.name);
    } else {
        menorEdad.push(element.name);
    }
}

console.log(mayorEdad.join("\n") + ("\n") + menorEdad.join("\n"));

