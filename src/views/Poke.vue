<template>
    <theme></theme>
    <div v-for="pokemon in pokemonInfo" :key="pokemon" class="row">
        <div class="column left">
            <img :src="pokemon.icon" alt="Icon" class="pokemonIcon">
            <h2 class="pokemonName" style="padding: 5px; margin: 9px 12px; text-transform: uppercase;">{{pokemon.name}}</h2>
            <div class="stats-container">
                <div class="stats">
                    <span class="text">Weight:     </span>
                    <span style="text2">{{pokemon.weight}}</span>
                </div>
                <div class="stats">
                    <span class="text">Height:     </span>
                    <span style="text2">{{pokemon.height}}</span>
                </div>
            </div>
        </div>
        <div class="column middle">
            <h2 style="padding: 5px; margin: 9px 8px;">Informations</h2>
            <div class="stats-container">
                <div class="stats">
                    <span class="text">Name:   </span>
                    <span class="text2">{{pokemon.name}}</span>
                </div>
                <span class="stats-small">Abilities:</span>
                <div v-for="abilitie in pokemon.abilities" :key="abilitie">
                    <div class="stats">
                        {{abilitie.ability_name}}
                    </div>
                </div>
            </div>
        </div>
        <div class="column right">
            <h2 style="padding: 5px; margin: 9px 8px;">Stats</h2>
            <div v-for="stats in pokemon.stats" :key="stats" class="stats-container">
                <div class="stats">
                    <span>{{stats.stat_name}}</span>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import theme from "../components/Theme.vue";
import axios from "axios";

export default {
    name: "myPoke",
    components: {
        theme
    },
    data() {
        return {
            pokemonInfo: []
        }
    },
    async mounted() {
        let pokemon = this.$route.params.id;

        let resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        
        let array = {
            name: resp.data.name,
            weight: resp.data.weight,
            height: resp.data.height,
            icon: resp.data.sprites.other.dream_world.front_default,
            stats: resp.data.stats.map(c => ({ base_stat: c.base_stat, stat_name: c.stat.name.replace('-', ' ')})),
            abilities: resp.data.abilities.map(c => ({ ability_name: c.ability.name}))
        }

        this.pokemonInfo.push(array)
    }   
}
</script>

<style>
    .row {
        display: flex;
    }

    .column {
        float: left;
        padding: 10px;
        height: 300px;
        border-radius: 10px
    }

    .left, .right {
        width: 15%;
        margin: 12px 12px;
        height: 50%;
        background-color: var(--cardColor)
    }

    .middle {
        width: 60%;
        height: 50%;
        padding-left: 20px;
        padding-right: 20px;
        margin: 12px 12px;
        background-color: var(--cardColor);
    }

    .row::after {
        content: "";
        display: table;
        clear: both
    }

    .stats-container {
        display: flex;
        flex-direction: column;
    }

    .stats {
        background-color: var(--statsColor);
        color: var(--textColor1);
        padding: 10px 10px;
        margin: 12px 12px;
        border-radius: 12px;
    }

    .stats:hover {
        transform: scale(1.02);
    }

    .stats-small {
        margin: 4px 18px;
        font-weight: bold;
    }

    .pokemonIcon {
        width: 250px;
        height: 250px;
    }

    @media (max-width: 800px) {
        .row {
            display: flex;
            flex-direction: column;
        }
        .column {
            width: 100%;
            margin: 5px;
            padding: 0px 5px
        }

        .pokemonIcon {
            width: 150px;
            height: 150px;
     
        }
    }

    @media (max-width: 1200px) {
        .row {
            display: flex;
            flex-direction: column;
        }
        .column {
            width: 100%;
            margin: 5px;
            padding: 0px 5px
        }

        .pokemonIcon {
            width: 150px;
            height: 150px;
        }
    }

    @media (max-width: 1600px) {
        .row {
            display: flex;
            flex-direction: column;
        }
        .column {
            width: 100%;
            margin: 5px;
            padding: 0px 5px
        }

        .pokemonIcon {
            width: 150px;
            height: 150px;
        }
    }
</style>