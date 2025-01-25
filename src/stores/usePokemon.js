import { defineStore } from "pinia"
import axios from "axios"

export const usePokemon = defineStore('pokemonStore', {
    state: () => ({
        pokemonList: [],
        pokemon: {},
        species: {},
        pokemonUpdated: [],
        loading: false,
        error: null,
    }),
    getters : {
        pokemonTypes () {
            const types = this.pokemonList.flatMap((pokemon) => 
                pokemon.types.map((type) => 
                    type.type.name))
            return [...new Set(types)]
        },
        types () {
            return this.pokemon?.types ? this.pokemon.types.map(type => type.type.name) : []
        },
        eggGroup () {
            return this.species?.egg_groups ? this.species.egg_groups.map(egg => egg.name) : []
        },
        genera () {
            return this.species?.genera ? this.species.genera.find(genera => genera.language.name === 'en') : []
        },
        gender () {
            const femalePercentage = (this.species?.gender_rate / 8) * 100
            const malePercentage = 100 - femalePercentage
            return { female: femalePercentage, male: malePercentage }
        }
    },
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
                            })
                            .catch((error) => {
                                console.log("Error : " + error)
                            })
                            .finally(() => this.loading = false)
                    });
            } catch (error) {
                console.error("Error fetching Pokémon data:", error)
            }
        },

        async show (id) {
            this.loading = true
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                this.pokemon = response.data;
            } catch (error) {
                console.error("Error fetching Pokémon data:", error)
                this.pokemon = {}
            } finally {
                this.loading = false
            }
        },

        async showSpecies (id) {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
                this.species = response.data;
            } catch (error) {
                console.error("Error fetching Pokémon data:", error)
                this.species = {}
            }
        },

        async fetchAbility (name) {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/ability/${name}`)
                const ability = response.data
                const effectEntries = ability.effect_entries
                return effectEntries.find(entry => entry.language.name === 'en')
            } catch {
                console.error("Error fetching Pokémon data:", error)
            }
        },

        update (id) {
            console.log('updating the pokemon...')
        }
    },

})