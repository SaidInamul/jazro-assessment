<script setup>
    import { ref, computed } from 'vue'
    import editInfo from './edit-info.vue'
    import { useRoute } from 'vue-router'
    import { usePokemon } from '@/stores/usePokemon'
    import { useToast } from "vue-toastification"

    const pokemonStore = usePokemon()
    const route = useRoute()
    const toast = useToast()

    const newTitle = ref("")
    const newDesc = ref("")
    const waiting = ref(false)

    const pokemonInfo = computed(() =>
        pokemonStore.showInfo(route.params.pokemon)
    )

    // Add new Pokémon info
    const create = () => {
        
        if (!newTitle.value || !newDesc.value) {
            toast.error("Please fill in both the Title and Description fields!")
            return
        }

        waiting.value = true

        setTimeout(async () => {
            await pokemonStore.storeInfo(route.params.pokemon, {
                title: newTitle.value,
                desc: newDesc.value,
            })

            // When the async operation finishes, stop the loading
            waiting.value = false;

            toast.success("New Pokémon info added successfully!");

            newTitle.value = "";
            newDesc.value = "";
        }, 100);
    }
    
</script>

<template>
    <div class="card-body text-capitalize" style="margin-top: -1rem;">
        <!-- Display Updated Info -->
        <editInfo
            v-for="(info, index) in pokemonInfo"
            :key="index"
            :info="info"
            :index="index"
            :id="route.params.pokemon"
        />
         <!-- Add New Info Section -->
        <div class="row border-bottom mt-3 pb-3">
            <div class="col-3 d-flex align-items-center">
                <input
                    v-model="newTitle"
                    class="form-control form-control-sm"
                    type="text"
                    placeholder="Title"
                    aria-label="default input example"
                />
            </div>
            <div class="col-9 d-flex align-items-center" style="column-gap: 1rem;">
                <span>:</span>
                <input
                    v-model="newDesc"
                    class="form-control form-control-sm"
                    type="text"
                    placeholder="Description"
                    aria-label="default input example"
                />
                <button class="btn btn-primary btn-sm bg-gradient" type="button" :disabled="waiting" v-if="waiting">
                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span class="visually-hidden" role="status">Loading...</span>
                </button>
                <button
                    type="button"
                    class="btn btn-primary btn-sm bg-gradient"
                    @click="create"
                    v-else
                >
                    <i class="bi bi-plus-circle-fill"></i>
                </button>
            </div>
        </div>
    </div>    
</template>