const albums = [
    {
        title: "De Mysteriis Dom Sathanas",
        imgUrl: "./assets/Mysteriis.jpg"
    },
    {
        title: "Reign of Blood",
        imgUrl: "./assets/Reign_of_blood.jpg"
    },
    {
        title: "Ride the Lightning",
        imgUrl: "./assets/Metallica_Ride-the-Lightning.jpg"
    },
    {
        title: "Painkiller",
        imgUrl: "./assets/painkiller-judas-priest.jpg"
    },
    {
        title: "Iron Fist",
        imgUrl: "./assets/Motorhead_Iron-Fist.jpg"
    }
];

const ul = document.createElement("ul");

for (let i = 0; i < albums.length; i++) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");

    img.src = albums[i].imgUrl;
    h3.textContent = albums[i].title;

    li.appendChild(img);
    li.appendChild(h3);
    ul.appendChild(li);
}

const footer = document.querySelector("footer");

document.body.insertBefore(ul, footer);