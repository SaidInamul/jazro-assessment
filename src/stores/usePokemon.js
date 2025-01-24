import { defineStore } from "pinia"
import axios from "axios"

export const usePokemon = defineStore('pokemonStore', {
    state: () => ({
        pokemonList: [],
        loading: false,
        error: null,
    }),
    getters : {},
    actions : {
        async fetchPokemons() {
            this.loading = true
            try {
                axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
                    .then((response) => {
                        const pokemonUrl = response.data.results

                        Promise.all(
                            pokemonUrl.map(async (pokemon) => {
                                const response = await axios.get(pokemon.url)
                                const pokemonDetails = response.data
                                return pokemonDetails
                            }),
                        )
                            .then((details) => {
                                this.pokemonList = details;
                                this.loading = false
                            })
                            .catch((error) => {
                                console.log("Error : " + error);
                            });
                    });
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            }
        },
    },

})