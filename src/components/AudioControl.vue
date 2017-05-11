<template>
    <div>
        <h2 class="card-header">Control</h2>
        <button v-on:click="loopPlaying" class="button is-medium is-primary" v-bind:class="{playing: playing}"><span class="text-black" v-bind:class="{white: playing}">Play</span></button>
        <button v-on:click="stopPlaying" class="button is-medium is-primary"><span class="text-black">Stop</span></button>

        <input v-model="bpm" v-on:change="changeBeatWhilePlaying">
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import samples from '../constants/samples.js';

export default {
    name: 'audio-control',
    computed: {
        ...mapGetters({
            notes: 'generatedNotes',
            bpm: 'currentBpm',
            noteTypes: 'noteTypes',
            noteAmount: 'noteAmount'
        })
    },
    data(){
        return {
            timeOuts: [],
            notePlayer: "",
            currentTotalDuration: 0,
            prevNoteDuration: 0,
            playing: false,
            playingNote: ""
        }
    },
    beforeDestroy() {
        this.stopPlaying();
    },
    methods: {
        //Play the generated notes based on note type and set bpm
        playNotes() {
            this.timeOuts = [];
            for(let note in this.notes){
                let currentNote = this.notes[note][0];
                let currentNoteType = this.notes[note][1];

                this.currentTotalDuration = note == 0 ? 0 : this.currentTotalDuration + this.prevNoteDuration;

                this.timeOuts.push(setTimeout(() => {
                    this.$store.commit('SET_PLAYING_NOTE', note);
                    this.playSample(samples[currentNote]);

                }, this.currentTotalDuration));
                this.prevNoteDuration = (60000 / this.bpm) * this.getNoteTypeModifier(currentNoteType);
            }
        },
        //Play given sample and interrupt that sample if it was still playing
        playSample(sample) {
            sample.pause();
            sample.currentTime = 0;
            sample.play();
        },
        //Loop playing the set of generated notes
        loopPlaying() {
            if(!this.playing){
                this.playing = true;
                this.playNotes();
                this.notePlayer = setInterval(() => {
                    this.playNotes()
                }, (60000 / this.bpm) * this.noteAmount);
            }
        },
        //Stop all timeouts and clear interval to stop playing the notes
        stopPlaying() {
            this.playing = false;
            this.$store.commit('CLEAR_PLAYING_NOTES');

            clearInterval(this.notePlayer);
            for(let timeout in this.timeOuts){
                clearTimeout(this.timeOuts[timeout]);
            }
            this.timeOuts = [];
        },
        //Reset playing the notes when the notes are being generated again
        changeBeatWhilePlaying() {
            this.stopPlaying();
            this.loopPlaying();
        },
        //Change notetype
        changeNoteType(noteType){
            if(noteType !== this.noteType){
                this.noteType = noteType;
                this.changeBeatWhilePlaying();
            }
        },
        //Get the modifier for given notetype
        getNoteTypeModifier(note){
            let modifier = 0;
            switch(note) {
                case "half":
                    modifier = 2;
                    break;
                case "quarter":
                    modifier = 1;
                    break;
                case "eighth":
                    modifier = 0.5;
                    break;
                case "sixteenth":
                    modifier = 0.25;
                    break;
                default:
                    modifier = 1;
            }

            return modifier;
        },

    }
}
</script>

<style lang="scss">
    .card-header {
        margin: 0.5rem;
    }

    .playing {
        background-color: #e74c3c !important;
    }

    .white {
        color: #fff !important;
    }
</style>
