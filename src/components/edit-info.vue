<script setup>
    import { ref } from "vue"
    import { defineProps } from "vue"
    import { usePokemon } from "@/stores/usePokemon"
    import { useToast } from "vue-toastification"

    const props = defineProps({
        info: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
        id: {
            required: true,
        },
    });

    const pokemonStore = usePokemon();
    const toast = useToast()

    // Edit mode toggle
    const isEditing = ref(false);
    const editedTitle = ref(props.info.title);
    const editedDesc = ref(props.info.desc);
    const waiting = ref(false)

    // Save edited info
    const edit = () => {
        if (!editedTitle.value || !editedDesc.value) {
            toast.error("Please fill in both the Title and Description fields!")
            return
        }

        waiting.value = true

        setTimeout(async () => {
            await pokemonStore.updateInfo(props.id, props.index, {
                title: editedTitle.value,
                desc: editedDesc.value,
            })
            
            waiting.value = false;

            toast.success("Pokémon info updated successfully!")
            isEditing.value = false
        }, 100);
        
    };

    // Cancel edit
    const cancelEdit = () => {
        editedTitle.value = props.info.title;
        editedDesc.value = props.info.desc;
        isEditing.value = false;
    };

    // Delete the Pokémon info
    const deleteInfo = () => {
        waiting.value = true

        setTimeout(async () => {
            await pokemonStore.destroyInfo(props.id, props.index)
            
            waiting.value = false;

            toast.success("Pokémon info deleted successfully!")
        }, 100);
    };

</script>

<template>
    <div class="row border-bottom py-3">
        <div class="col-3 d-flex align-items-center">
            <input
                v-if="isEditing"
                v-model="editedTitle"
                class="form-control form-control-sm"
                type="text"
                placeholder="Title"
                aria-label="default input example"
            />
            <input
                v-else
                class="form-control form-control-sm"
                :value="info.title"
                type="text"
                disabled
                placeholder="Title"
                aria-label="default input example"
            />
        </div>
        <div class="col-9 d-flex align-items-center" style="column-gap: 1rem;">
            <span>:</span>
            <input
                v-if="isEditing"
                v-model="editedDesc"
                class="form-control form-control-sm"
                type="text"
                placeholder="Description"
                aria-label="default input example"
            />
            <input
                v-else
                class="form-control form-control-sm"
                :value="info.desc"
                type="text"
                disabled
                placeholder="Description"
                aria-label="default input example"
            />
            <!-- Save Button -->
            <button
                class="btn btn-primary btn-sm bg-gradient"
                type="button"
                :disabled="waiting"
                v-if="isEditing"
                @click="edit"
            >
                <span
                    v-if="waiting"
                    class="spinner-border spinner-border-sm"
                    aria-hidden="true"
                ></span>
                <span v-else>Save</span>
            </button>

            <!-- Cancel Button -->
            <button
                class="btn btn-secondary btn-sm bg-gradient"
                type="button"
                :disabled="waiting"
                v-if="isEditing"
                @click="cancelEdit"
            >
                <span
                    v-if="waiting"
                    class="spinner-border spinner-border-sm"
                    aria-hidden="true"
                ></span>
                <span v-else>
                    <i class="bi bi-x-circle-fill"></i>
                </span>
            </button>

            <!-- Edit Button -->
            <button
                v-else
                type="button"
                class="btn btn-primary btn-sm bg-gradient"
                @click="() => (isEditing = true)"
            >
                <i class="bi bi-pencil-square"></i>
            </button>

            <!-- Delete Button -->
            <button
                class="btn btn-danger btn-sm bg-gradient"
                type="button"
                :disabled="waiting"
                @click="deleteInfo"
            >
                <span
                    v-if="waiting"
                    class="spinner-border spinner-border-sm"
                    aria-hidden="true"
                ></span>
                <span v-else>
                    <i class="bi bi-trash2-fill"></i>
                </span>
            </button>
        </div>
    </div>
</template>