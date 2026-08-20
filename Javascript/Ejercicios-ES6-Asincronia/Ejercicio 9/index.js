// Imagen Pokemn
const imagenPokemon = document.querySelector('.random-image'); 

// Numero aleatorio
const numeroPokemon = Math.floor(Math.random() * 151) + 1;

// Obtenemos Pokemon
const obtenerPokemon = async () => {

     try { 
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroPokemon}`);
        
        const pokemon = await respuesta.json();
        
        imagenPokemon.src = pokemon.sprites.front_default;
    } catch (error) { 
        console.error(error); 
    } 
}; 

obtenerPokemon();