<template>
    <div class="column is-3">
        <div class="box">
            <h3 class="card-header">Note types</h3>
            <filter-checkbox
                :category="categories.noteTypes"
                :filterObject="type"
                :filter="type.type"
                :value="type.active"
                :key="type.type"
                v-for="type in noteTypes">
            </filter-checkbox>

            <h3 class="card-header">Notes</h3>
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

<style scoped lang="scss">
    .box {
        background-color: #fff;
        border-color: #fff;

        h3, h2 {
            color:#1D1D1D;
        }

        h3 {
            margin-bottom: 0.5rem;
        }

    }
</style>
