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
                                <note-list ref="notelists"></note-list>
                                <button v-on:click="generateNotes" class="button is-medium is-primary"><span class="text-black">Generate</span></button>
                            </div>

                            <div class="box control">
                                <audio-control class="control-component"></audio-control>
                                <note-amount class="control-component"></note-amount>
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
    mounted() {
        this.generateNotes();
    },
    methods: {
        generateNotes(){
            this.$store.commit('GENERATE_NOTES');
            // this.$store.commit('SET_NOTE_COMPONENTS', this.$refs.notelists.$children);
        }
    }
}
</script>

<style lang="scss">
    .container {
        margin-top: 3rem;
    }

    .control-component {
        display: inline-block;
        margin-right: 1rem;
    }

    .card-header {
        margin: 0 0.5rem 0.5rem 0.5rem !important;
    }
</style>
