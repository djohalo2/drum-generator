<template>
    <div class="column is-2">
        <div class="box">
            <h2 class="card-header">Filters</h2>
            <h3>Note types</h3>
            <filter-checkbox
                :category="categories.noteTypes"
                :filterObject="type"
                :filter="type.type"
                :value="type.active"
                :key="type.type"
                v-for="type in noteTypes">
            </filter-checkbox>

            <h3>Notes</h3>
            <filter-checkbox
                :category="categories.notes"
                :filterObject="note"
                :filter="note.note"
                :value="note.active"
                :key="note.note"
                v-for="note in notes">
            </filter-checkbox>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FilterCheckbox from './FilterCheckbox.vue';

export default {
    name: 'filters',
    components: {
        FilterCheckbox
    },
    data() {
        return {
            categories: {
                noteTypes: "noteTypes",
                notes: "availableNotes"
            }
        }
    },
    computed: {
        ...mapGetters({
            notes: 'availableNotes',
            noteTypes: 'noteTypes'
        })
    }
}
</script>

<style scoped>

</style>
