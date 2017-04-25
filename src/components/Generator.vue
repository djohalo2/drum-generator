<template>
    <div class="generator">
        <top-header></top-header>

        <div class="container">
            <div class="columns">
                <div class="column is-10 is-offset-1">
                    <div class="columns">
                        <filters></filters>
                        <div class="column is-9">
                            <div class="box">
                                <h2 class="card-header">Generator</h2>
                                <note-list></note-list>
                                <button v-on:click="generateNotes" class="button is-medium is-primary">Generate</button>
                                <note-amount></note-amount>
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
import Filters from './Filters.vue';
import AudioControl from './AudioControl.vue';
import NoteAmount from './NoteAmount.vue';

export default {
    name: 'generator',
    components: {
        TopHeader,
        NoteList,
        AudioControl,
        Filters,
        NoteAmount
    },
    created() {
        this.generateNotes();
    },
    methods: {
        generateNotes(){
            this.$store.commit('GENERATE_NOTES');
        }
    }
}
</script>

<style lang="scss">
    .box {
        margin-top: 3rem;
    }

    button {
        margin-bottom: 0.5rem;
    }
</style>
