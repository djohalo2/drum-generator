import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        notes: [],
        noteTypes: [
            "quarter",
            "eighth",
            "sixteenth"
        ],
        bpm: 120,
        playing: false,
    },
    getters: {
        generatedNotes(state) {
            return state.notes;
        },
        currentBpm(state) {
            return state.bpm;
        },
        noteTypes(state) {
            return state.noteTypes;
        }
    },
    mutations: {
        //Generate a set of notes based on notetypes
        generateNotes(state) {
            const notes = ["kick", "snare", "hi-hat", "high-tom", "mid-tom", "low-tom", "crash", "ghost"];

            // state.stopPlaying();
            state.notes = [];
            let randomNote = [];
            let randomNoteType = [];

            for(let i = 0;i < 4; i++){
                randomNote = notes[_.random(notes.length - 1)];
                randomNoteType = state.noteTypes[_.random(state.noteTypes.length - 1)];

                state.notes.push([randomNote, randomNoteType, "first"]);

                if(randomNoteType == "eighth"){
                    state.notes.push([notes[_.random(notes.length - 1)], randomNoteType, "second"]);
                }else if(randomNoteType == "sixteenth"){
                    state.notes.push([notes[_.random(notes.length - 1)], randomNoteType, "second"]);
                    state.notes.push([notes[_.random(notes.length - 1)], randomNoteType, "third"]);
                    state.notes.push([notes[_.random(notes.length - 1)], randomNoteType, "fourth"]);
                }

            };
        }
    },
    actions: {

    }
});

export default store;
