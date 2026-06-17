/*
Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

Recuerda no usar frutas duplicadas.

Finalmente, imprime el array resultante.
*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

//Creamos variable de apoyo
let indiceFruit = 0;

//Recorremos array de comida
for (let i = 0; foodSchedule.length > i; i++){
    //Si no es verdadero sustituimos con fruta
    if(!foodSchedule[i].isVegan){
        //Aqui usamos la variable de apoyo y corregimos su estado, ampliamos variable de apoyo para no repetir indice.
        foodSchedule[i].name = fruits[indiceFruit];
        foodSchedule[i].isVegan = true;
        indiceFruit++;
    }
}

console.log(foodSchedule);