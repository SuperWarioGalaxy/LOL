import { Champion } from "./champ.js";

export class ChampionModel {
    constructor() {
        this.champions = [];
    }

    async fetchChampion(name) {
        try{
            const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json`);
            const data = await response.json();
            return new Champion(data);
        }   catch (error) {
            throw new Error(`Error fetching Champion with Name: ${name}: ${error}`);
        }
    }



    getAllChampions(){
        return this.champions;
    }


}
