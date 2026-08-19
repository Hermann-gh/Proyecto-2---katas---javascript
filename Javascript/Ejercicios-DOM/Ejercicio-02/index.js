// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const nuevoDiv = document.createElement("div");

document.body.appendChild(nuevoDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const nuevoDiv2 = document.createElement("div");
const nuevoParrafo = document.createElement("p");

nuevoDiv2.appendChild(nuevoParrafo);
document.body.appendChild(nuevoDiv2);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const nuevoDiv3 = document.createElement("div");

for (let i = 0; i < 6; i++) {
    const nuevoParrafo2 = document.createElement("p");
    nuevoDiv3.appendChild(nuevoParrafo2);
}

document.body.appendChild(nuevoDiv3);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const nuevoParrafo3 = document.createElement("p");

nuevoParrafo3.textContent = "Soy dinámico!";
document.body.appendChild(nuevoParrafo3);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

//Aqui hay varios varios elementos iguales pero en este caso queremos el H2 que es el primero. Por eso nos sirve el querySelector
const h2 = document.querySelector(".fn-insert-here");

h2.textContent = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

//Creamos ul
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");

//bucle for para ir insertando el array
for (let i = 0; i < apps.length; i++) {
    const li = document.createElement("li");
    li.textContent = apps[i];
    //Metemos dentro de ul
    ul.appendChild(li);
}

document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

//Agrupamos por clase
const elements = document.querySelectorAll(".fn-remove-me");

//eliminamos con el bucle for
for (let i = 0; i < elements.length; i++) {
    elements[i].remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const divs = document.querySelectorAll("div");
const nuevoParrafo4 = document.createElement("p");

nuevoParrafo4.textContent = "Voy en medio!";
divs[1].parentNode.insertBefore(nuevoParrafo4, divs[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const divsInsert = document.querySelectorAll(".fn-insert-here");

for (let i = 0; i < divsInsert.length; i++) {
    const nuevoParrafo5 = document.createElement("p");
    nuevoParrafo5.textContent = "Voy dentro!";
    divsInsert[i].appendChild(nuevoParrafo5);
}