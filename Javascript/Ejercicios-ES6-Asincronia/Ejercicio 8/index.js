const listaPersonajes = document.querySelector('#character-list');
const imagenPersonaje = document.querySelector('.character-image');

const obtenerPersonaje = async () => {

    try {
        const respuesta = await fetch('https://thronesapi.com/api/v2/Characters');
        
        const personajes = await respuesta.json();

        personajes.forEach(personaje => {
            const opcion = document.createElement('option');
            opcion.value = personaje.imageUrl;
            opcion.innerText = personaje.fullName;

            listaPersonajes.append(opcion);
        });
    } catch (error) {

        console.error(error);
    }
};

listaPersonajes.addEventListener('change', (event) => {

    imagenPersonaje.src = event.target.value;
});

obtenerPersonaje();
