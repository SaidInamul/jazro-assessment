import { defineStore } from "pinia"
import axios from "axios"

export const usePokemon = defineStore('pokemonStore', {
    state: () => ({
        pokemonList: [],
        pokemon: {},
        species: {},
        chain: null,
        evolutionChain : [],
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
        },
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

        filterPokemon (query) {
            if (!query?.element && !query?.search) {
                return this.pokemonList
            }

            // Filter by element type if provided
            if (query?.element) {
                const queryElementLower = query.element.toLowerCase();
                return this.pokemonList.filter((pokemon) =>
                    pokemon.types.some((type) => type.type.name === queryElementLower)
                );
            }

            // Filter by Pokémon name if provided
            if (query?.search) {
                const querySearchLower = query.search.toLowerCase();
                return this.pokemonList.filter((pokemon) =>
                    pokemon.name.toLowerCase().includes(querySearchLower)
                );
            }

            // Return the full list if no matching query type or search is found
            return this.pokemonList;
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
        
        async fetchEvolution(id) {
            await this.showSpecies(id);
        
            try {
                const response = await axios.get(this.species.evolution_chain.url);
                this.chain = await response.data

                let currentChain = this.chain?.chain
                const evolutionData = []

                while (currentChain) {

                    const url = currentChain?.species?.url
                    const id = url.split('/').slice(-2, -1)[0]

                    evolutionData.push({
                        name: currentChain?.species?.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                      })

                    currentChain = currentChain?.evolves_to?.[0] || null
                }

                this.evolutionChain = evolutionData

            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            }
        },

        searchPokemon () {

        },

        update (id) {
            console.log('updating the pokemon...')
        }
    },

})