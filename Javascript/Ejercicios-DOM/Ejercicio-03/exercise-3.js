// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
 
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul");

for (let i = 0; i < countries.length; i++) {
    const li = document.createElement("li");
    li.textContent = countries[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const element = document.querySelector(".fn-remove-me");

element.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const div = document.querySelector('[data-function="printHere"]');
const ul2 = document.createElement("ul");

for (let i = 0; i < cars.length; i++) {
    const li2 = document.createElement("li");
    li2.textContent = cars[i];
    ul2.appendChild(li2);
}

div.appendChild(ul2);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

const countriesImages = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (let i = 0; i < countriesImages.length; i++) {
    const div2 = document.createElement("div");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");

    h4.textContent = countriesImages[i].title;
    img.src = countriesImages[i].imgUrl;

    div2.appendChild(h4);
    div2.appendChild(img);
    document.body.appendChild(div2);
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

const button = document.createElement("button");
button.textContent = "Eliminar último";
document.body.appendChild(button);

button.addEventListener("click", () => {
    const divs = document.querySelectorAll("body > div");
    divs[divs.length - 1].remove();
});


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

const divs2 = document.querySelectorAll("body > div");

for (let i = 0; i < divs2.length; i++) {
    const button2 = document.createElement("button");
    button2.textContent = "Eliminar";

    divs2[i].appendChild(button2);
    button2.addEventListener("click", () => {
        divs2[i].remove();
    });
}
