<template>
  <div>
    <input type="text" id="pokemonsearch" class="searchPokemon" placeholder="Search Pokemon">

    <div class="container">
      <div class="pokemon-card" v-for="pokemon in pokemonList" :key=pokemon :style="{backgroundColor: pokemon.color}">
        <a class="pokemon-name" id="pokemoninfo" :href="`#${pokemon.name}`">{{pokemon.name}}</a>
        <img :src="pokemon.icon" class="pokemon-image">

        <div class="pokemon-modal" :id=pokemon.name>
          <div class="modal-content" :style="{backgroundColor: pokemon.color}">
            <a href="#" class="modal-close">&rarr;</a>
            <h1 class="modal-title">{{pokemon.name}}</h1>
            <img :src="pokemon.icon" class="modal-image" width="150" height="150">

            <div class="modal-stats">
              <p>Weight: <span>{{pokemon.width}}</span></p>
              <p>Height: <span>{{pokemon.height}}</span></p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div class="footer">
      <div class="footer-container">
        <a href="https://github.com/Meetabeast/PokemonInfo" target="_blank">
          <p>Show the Code on Github</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      pokemons: [],
      pokemonList: [],
      pokemonStats: [],
    }
  },
  async mounted() {
    this.url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=2';
    let resp = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=300');

    for(var i = 0; i < resp.data.results.length; i++) {
      this.pokemons.push(resp.data.results[i])
    }

    this.pokemons.forEach(async pokemon => {
      let PokemonInfo = await axios.get(pokemon.url);
      let PokemonColor = await axios.get(PokemonInfo.data.species.url);

      for (var i = 0; i  < PokemonInfo.data.stats.length; i++) {
        this.pokemonStats.push(PokemonInfo.data.stats[i].stat.name, PokemonInfo.data.stats[i].base_stat)
      }

      let habitats = {
        "forest": "#0bba1c",
        "grassland": "#0bba1c",
        "urban": "#191c19",
        "mountain": "#272927",
        "waters-edge": "#316a99",
        "rough-terrain": "#1b1e1f",
        "cave": "#111212",
        "sea": "#0d56d4",
        "poison": "#1f2f4a",
        "normal": "#0bba1c",
        "freshwater-ponds": "#FFFFFF",
        "solaceon-town": "#FFF"
      }

      let Infos = {
        name: PokemonInfo.data.name,
        icon: PokemonInfo.data.sprites.other.dream_world.front_default,
        width: PokemonInfo.data.weight,
        height: PokemonInfo.data.height,
        color: habitats[PokemonColor.data.habitat.name],
        stats: this.pokemonStats
      }

      this.pokemonList.push(Infos);
    });
    

    let input = document.getElementById("pokemonsearch");

    input.onkeyup = function() {
      let searchinput = document.getElementById('pokemonsearch').value;
      searchinput = searchinput.toLowerCase();
      let allPokemons = document.getElementsByClassName("pokemon-name");
      let allPokemonsCards = document.getElementsByClassName("pokemon-card")

      for(var i = 0; i < allPokemons.length; i++) {
        if(!allPokemons[i].innerHTML.toLowerCase().includes(searchinput)) {
          allPokemonsCards[i].style.display = "none";
        } else {
          allPokemons[i].style.display = "block";
        }
      }
    }
    
  }
}
</script>

<style>
  body {
    background-color: rgb(32, 37, 41);
  }

  .searchPokemon {
    display: block;
    background-color: rgb(21, 23, 24);
    margin-right: auto;
    margin-left: auto;
    border: none;
    color: rgb(255, 255, 255);
    font-size: 1rem;
    padding: 1rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    width: 300px;
  }

  .searchPokemon:focus {
    outline: none;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .pokemon-card {
    padding: 8px;
    margin: 12px;
    height: 250px;
    width: 300px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    float: left;
    position: relative;
    overflow: hidden;
    text-align: center;
  }

  .pokemon-name {
    font-size: 28px;
    text-transform: uppercase;
    font-weight: bold;
    color: rgb(255, 255, 255);
    font-family: Arial;
    text-decoration: none;
    cursor: pointer;
  }

  .pokemon-modal {
    background: rgb(0, 0, 0, 0.7);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    bottom: 0px;
    transition: all .5s ease-in-out;
    opacity: 0;
    z-index: -1;
  }

  .pokemon-modal:target {
    opacity: 1;
    transition: all .5s ease-in-out;
    z-index: +1;
  }

  .modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 590px;
    background: #fff;
    border-radius: 4px;
    transform: translate(-50%, -200%);
    transition: all .5s ease-in-out;
    perspective: 1000;
    outline: 1px solid transparent;
    opacity: 0;
  }

  .modal-image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto auto 0;
  }

  .pokemon-modal:target .modal-content {
    transform: translate(-50%, -50%);
    transition: all .5s ease-in-out;
    transition-delay: .5s;
    z-index: 9999;
    opacity: 1;
  }

  .modal-close {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 38px;
    padding: 22px 22px;
    color: rgb(255, 255, 255);
    font-weight: 800;
    transition: all .5s ease-in-out;
    z-index: +1;
    border-radius: 0 4px 0 0;
    margin-left: auto;
    margin-right: auto;
    top: 0px;
    left: 210px;
    position: relative;
  }

  .modal-title {
    color: rgb(255, 255, 255);
    font-family: Arial;
    text-transform: uppercase;
    font-size: 25px;
  }

  .modal-stats {
    font-size: 17px;
    font-family: Arial;
    color: rgb(255, 255, 255);
    padding: 10px 10px;
  }
  
  .footer {
    display: flex;
    justify-content: center;
    padding-top: 10vh;
    font-family: 'Arial', sans-serif;
    font-size: 19px;
  }

  .footer-container a {
    text-decoration: none;
    color: rgb(255, 255, 255);
  }
  
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgb(32, 37, 41)
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(190, 24, 24);
    border-radius: 10px;
  }

  @media (max-width: 1200px) {
    .modal-close {
      left: 150px;
    }
  }
</style>
