<template>
    <div class="generator">
        <top-header></top-header>

        <div class="container">
            <div class="columns">
                <div class="column is-10 is-offset-1">
                    <div class="columns">
                        <div class="column is-2">
                            <div class="box">
                                <h2 class="card-header">Filters</h2>
                                <!-- <filter-checkbox @filter-toggled="toggleFilter(key)" :noteType="key" :key="key" v-for="(value, key) in noteTypes"></filter-checkbox> -->
                            </div>
                        </div>

                        <div class="column is-10">
                            <div class="box">
                                <h2 class="card-header">Generator</h2>

                                <note-list></note-list>

                                <button v-on:click="generateNotes" class="button is-medium is-danger is-outlined">Generate</button>

                                <audio-control></audio-control>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopHeader from './TopHeader.vue';
import NoteList from './NoteList.vue';
import FilterCheckbox from './FilterCheckbox.vue';
import AudioControl from './AudioControl.vue';

export default {
    name: 'generator',
    components: {
        TopHeader,
        NoteList,
        FilterCheckbox,
        AudioControl
    },
    created() {
        this.generateNotes();
    },
    methods: {
        generateNotes(){
            this.$store.commit('generateNotes');
        }
    }
}
</script>

<style scoped>
    .box {
        margin-top: 3rem;
    }

    button {
        margin-bottom: 0.5rem;
    }
</style>
