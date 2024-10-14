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
    
    champions.forEach((champ) => {
        const img = `https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${champ.image.full}`;

        r_champ.innerHTML +=    `<div class="card" >
                                    <h3>${champ.name}</h3>
                                    <hr>
                                    <p class="title">${champ.title}</p><br>
                                    <img class="front" src="${img}"><br>
                                    <div class="types">
                                        ${champ.tags.map(tag=>`${tag}`).join(' | ')}
                                    </div>
                                    <div class="text-container">
                                        <p>${champ.blurb}</p>
                                    </div>
                                </div>`
    })
}


// const img = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id + '_0.jpg'}`
