import Champion from './champ.js';

var champions = [];

const button = document.querySelector("button");

button.addEventListener("click", function() {
    document.querySelector('#button').style.visibility = 'hidden';
    document.querySelector('#rchamp').style.visibility = 'visible';
    document.querySelector('html, body').style.height = '0%';
    startR_champ();
});

const startR_champ = async () => {
    const data = await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json")
        .then(function(result) {
            return result.json();
        });
        const array = data.data;
        Object.entries(array).forEach(([name, champion]) =>{
            const champ = new Champion(champion);
            pushChampion(champ);
        });
        
    showChampions();
};

function pushChampion(champion) {
    champions.push(champion);
}

const showChampions = async () => {
    const r_champ = document.getElementById("rchamp");
    const modal = document.getElementById("modal");
    champions.forEach((champ) => {
        const img = `https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${champ.image.full}`;

        modal.innerHTML +=`
        <div class="detail">
            ${champ.blurb}
            <span class="close">&times;</span>
        </div>
        `
        r_champ.innerHTML +=    `<div class="card" >
                                    <button class="open">${champ.name}</button>
                                    <hr>
                                    ${champ.title}<br>
                                    <img class="front" src="${img}"><br>
                                    <div class="types">
                                        ${champ.tags.map(tag=>`${tag}`).join(' | ')}
                                    </div>
                                </div>`
    })
}

const open = document.querySelector(".open");
open.addEventListener("click", function() {
    
    document.querySelector('.modal').style.display = "block";
});
const close = document.querySelector(".close");
close.addEventListener("click", function() {
    document.querySelector('.modal').style.display = "none";
});

// const img = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id + '_0.jpg'}`
