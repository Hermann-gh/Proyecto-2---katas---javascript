const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

//Input
const input = document.querySelector('[data-function="toFilterStreamers"]');

input.addEventListener('input', (event) => { 
    const text = event.target.value;
    const filteredStreamers = streamers.filter(streamer => streamer.name.includes(text));
    console.log(filteredStreamers);
});

