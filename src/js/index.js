import Champion from './champ.js';

var champions = [];

const button = document.querySelector("button");

button.addEventListener("click", () => {
    document.querySelector('#button').style.visibility = 'hidden';
    document.querySelector('#r_champ').style.visibility = 'visible';
    startR_champ();
});

const startR_champ = async () => {
    await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json")
        .then(function(result) {
            return result.json();
        }).then(function(result){
            const data = result;
            const champion = new Champion (data);
            pushChampion(champion);
        });
    await showChampions();
};

function pushChampion(champion) {
    champions.push(champion);
}

const showChampions = async () => {
    const r_champ = document.getElementById("r_champ");
    for(var i = 0; i < champions.length; i++) {
        var aux = 0;
        while (aux != champions[i].tags.length) {
            if (aux == 0)
                var tipo1 = champions[i].tags[aux];
            if (aux == 1)
                var tipo2 = champions[i].tags[aux];
            else
                tipo2 = " ";
            aux++;
        }
    
        const img = `https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${champions[i].image.full}`;
        r_champ.innerHTML +=    `<div class="card">
                                    <img class="back" src="${img}"><br>
                                    ${champions[i].name}. ${champions[i].title}<br>
                                    <div class="types">
                                        ${tipo1} ${tipo2}
                                    </div>
                                    
                                </div>`
    }
}
