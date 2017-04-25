<template>
    <div>
        <button v-on:click="loopPlaying" class="button is-medium is-danger is-outlined">Play</button>
        <button v-on:click="stopPlaying" class="button is-medium is-danger is-outlined">Stop</button>

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
            noteTypes: 'noteTypes'
        })
    },
    data(){
        return {
            timeOuts: [],
            notePlayer: "",
            currentTotalDuration: 0,
            prevNoteDuration: 0
        }
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
                }, (60000 / this.bpm) * 4);
            }
        },
        //Stop all timeouts and clear interval to stop playing the notes
        stopPlaying() {
            this.playing = false;
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

<style scoped>

</style>