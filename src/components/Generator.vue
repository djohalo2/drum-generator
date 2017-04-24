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
                                <filter-checkbox @filter-toggled="toggleFilter(key)" :noteType="key" :key="key" v-for="(value, key) in noteTypes"></filter-checkbox>
                            </div>
                        </div>

                        <div class="column is-10">
                            <div class="box">
                                <h2 class="card-header">Generator</h2>

                                <note-list ref="noteComponent" :notes="notes"></note-list>

                                <button v-on:click="generateNotes" class="button is-medium is-danger is-outlined">Generate</button>
                                <button v-on:click="loopPlaying" class="button is-medium is-danger is-outlined">Play</button>
                                <button v-on:click="stopPlaying" class="button is-medium is-danger is-outlined">Stop</button>
                                <button v-on:click="toggleMetronome" class="button is-medium is-danger is-outlined">Metronome</button>

                                <input v-model="bpm" v-on:change="changeBeatWhilePlaying">
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
import samples from '../constants/samples.js';

export default {
    name: 'generator',
    components: {
        TopHeader,
        NoteList,
        FilterCheckbox
    },
    data () {
        return {
            notes: [],
            noteTypes: {
                quarter: true,
                eighth: true,
                sixteenth: true
            },
            bpm: 120,
            notePlayer: "",
            timeOuts: [],
            playing: false,
            metronome: false,
            currentTotalDuration: 0,
            prevNoteDuration: 0
        }
    },
    computed: {
        activeNoteTypes() {
            let activeNoteTypes = [];
            for(let noteType in this.noteTypes){
                if(this.noteTypes[noteType]){
                    activeNoteTypes.push(noteType);
                }
            }
            return activeNoteTypes;
        }
    },
    created() {
        this.generateNotes();
    },
    methods: {
        //Generate a random number within a given range
        randomNumber(range) {
            return Math.floor((Math.random() * range) + 0);
        },
        //Generate a set of notes based on notetypes
        generateNotes() {
            const notes = ["kick", "snare", "hi-hat", "high-tom", "mid-tom", "low-tom", "crash", "ghost"];

            this.stopPlaying();
            this.notes = [];

            for(let i = 0;i < 4; i++){
                let randomNote = notes[this.randomNumber(notes.length)];
                let randomNoteType = this.activeNoteTypes[this.randomNumber(this.activeNoteTypes.length)];

                this.notes.push([randomNote, randomNoteType, "first"]);

                if(randomNoteType == "eighth"){
                    this.notes.push([notes[this.randomNumber(notes.length)], randomNoteType, "second"]);
                }else if(randomNoteType == "sixteenth"){
                    this.notes.push([notes[this.randomNumber(notes.length)], randomNoteType, "second"]);
                    this.notes.push([notes[this.randomNumber(notes.length)], randomNoteType, "third"]);
                    this.notes.push([notes[this.randomNumber(notes.length)], randomNoteType, "fourth"]);
                }

            };
        },
        //Play the generated notes based on note type and set bpm
        playNotes() {
            this.timeOuts = [];
            for(let note in this.notes){
                let currentNote = this.notes[note][0];
                let currentNoteType = this.notes[note][1];

                this.currentTotalDuration = note == 0 ? 0 : this.currentTotalDuration + this.prevNoteDuration;

                this.timeOuts.push(setTimeout(() => {
                    this.highlightCurrentNote(note);

                    if(currentNote == "crash"){
                        this.playSample(samples.kick);
                    }

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
        //Toggle the metronome boolean
        toggleMetronome() {
            this.metronome = !this.metronome;
        },
        //Find the given component and highlight its text in red
        highlightCurrentNote(note) {
            if(note == 0){
                this.$refs.noteComponent.$children[this.notes.length - 1]._data.isPlaying = false;
            }else {
                this.$refs.noteComponent.$children[note - 1]._data.isPlaying = false
            }
            this.$refs.noteComponent.$children[note]._data.isPlaying = true;
        },
        //Toggle notetype filters
        toggleFilter(key){
            this.noteTypes[key] = !this.noteTypes[key];
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box {
        margin-top: 3rem;
    }

    button {
        margin-bottom: 0.5rem;
    }
</style>
