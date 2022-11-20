<template>
    <theme></theme>
    <div class="wrapper">
        <input type="text" id="search" class="input-field" placeholder="Search Pokemon">
        <div class="pokemon-container">

            <div v-for="pokemon in pokemonList" :key="pokemon" class="pokemon">
                <h2 class="pokemon-name">
                    {{pokemon.name}}
                </h2>
                <img :src=pokemon.icon alt="Icon" class="pokemon-icon">
                <div class="pokemon-footer">
                    <a :href="`/poke/${pokemon.id}`">
                        <span>{{pokemon.name}} - More Info</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Theme from "../components/Theme.vue";
import axios from "axios";

export default {
    name: "myHome",
    components: {
        Theme
    },
    data() {
        return {
            pokemons: [],
            pokemonList: []
        }
    },
    async mounted() {
        let resp = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=300');

        for(var i = 0; i < resp.data.results.length; i++) {
            this.pokemons.push(resp.data.results[i]);
        }

        this.pokemons.forEach(async pokemon => {
            let PokemonInfo = await axios.get(pokemon.url);

            let Infos = {
                id: PokemonInfo.data.id,
                name: PokemonInfo.data.name,
                icon: PokemonInfo.data.sprites.other.dream_world.front_default,
            }

            this.pokemonList.push(Infos)
        });

        let input = document.getElementById("search");

        input.onkeyup = function() {
            let searchInput = document.getElementById("search").value;
            searchInput = searchInput.toLowerCase();
            let allPokemons = document.getElementsByClassName('pokemon-name');
            let allPokemonsCard = document.getElementsByClassName('pokemon');

            for(var i = 0; i < allPokemons.length; i++) {
                if(!allPokemons[i].innerHTML.toLowerCase().includes(searchInput)) {
                    allPokemonsCard[i].style.display = "none";
                } else {
                    allPokemonsCard[i].style.display = "block";
                }
            }
        }
    }
}
</script>

<style>
body {
    background-color: var(--background1);
    color: var(--textColor1);
    font-family: Arial, Helvetica, sans-serif;
}

.pokemon-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.pokemon {
    padding: 15px 15px;
    margin: 12px;
    background-color: var(--cardColor);
    width: 250px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.input-field {
    display: block;
    background-color: var(--cardColor);
    margin-right: auto;
    margin-left: auto;
    border: none;
    color: var(--textColor1);
    font-size: 1rem;
    padding: 1rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    width: 400px;
}

.pokemon-name {
    padding-bottom: 30px;
}

.pokemon-icon {
    width: 150px;
    height: 150px;
}

.pokemon-footer {
    text-align: start;
    padding-top: 20px;
}

.pokemon-footer a {
    text-decoration: none;
    color: rgb(255, 255, 255);
}
</style>