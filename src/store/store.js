import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        notes: [],
        availableNotes: [
            {
                note: "kick",
                active: true
            },
            {
                note: "snare",
                active: true
            },
            {
                note: "hi-hat",
                active: true
            },
            {
                note: "high-tom",
                active: true
            },
            {
                note: "mid-tom",
                active: true
            },
            {
                note: "low-tom",
                active: true
            },
            {
                note: "crash",
                active: true
            },
            {
                note: "ghost",
                active: true
            }
        ],
        noteTypes: [
            {
                type: "quarter",
                active: true
            },
            {
                type: "eighth",
                active: true
            },
            {
                type: "sixteenth",
                active: true
            }
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
        },
        availableNotes(state) {
            return state.availableNotes;
        },
        activeNoteTypes(state) {
            return _.filter(state.noteTypes, ['active', true]);
        },
        activeAvailableNotes(state) {
            return _.filter(state.availableNotes, ['active', true]);
        }
    },
    mutations: {
        //Generate a set of notes based on notetypes
        generateNotes(state) {
            state.notes = [];
            let randomNote = [];
            let randomNoteType = [];

            console.log(store.getters.activeAvailableNotes[0].note);

            for(let i = 0;i < 4; i++){
                randomNote = store.getters.activeAvailableNotes[_.random(store.getters.activeAvailableNotes.length - 1)].note;
                randomNoteType = store.getters.activeNoteTypes[_.random(store.getters.activeNoteTypes.length - 1)].type;

                state.notes.push([randomNote, randomNoteType, "first"]);

                if(randomNoteType == "eighth"){
                    state.notes.push([store.getters.activeAvailableNotes[_.random(store.getters.activeAvailableNotes.length - 1)].note, randomNoteType, "second"]);
                }else if(randomNoteType == "sixteenth"){
                    state.notes.push([store.getters.activeAvailableNotes[_.random(store.getters.activeAvailableNotes.length - 1)].note, randomNoteType, "second"]);
                    state.notes.push([store.getters.activeAvailableNotes[_.random(store.getters.activeAvailableNotes.length - 1)].note, randomNoteType, "third"]);
                    state.notes.push([store.getters.activeAvailableNotes[_.random(store.getters.activeAvailableNotes.length - 1)].note, randomNoteType, "fourth"]);
                }
            };
        },
        toggleFilter(state, payload) {
            const target = _.find(state[payload.category], payload.filterObject);
            target.active = !target.active;
        }
    },
    actions: {

    }
});

export default store;
