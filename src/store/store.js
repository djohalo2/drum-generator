import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import { GENERATE_NOTES, TOGGLE_FILTER, ADD_NOTE_AMOUNT, REMOVE_NOTE_AMOUNT, SET_PLAYING_NOTE, SET_NOTE_COMPONENTS } from './mutation-types';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        notes: [],
        noteAmount: 4,
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
        noteComponents: []
    },
    getters: {
        generatedNotes(state) {
            return state.notes;
        },
        noteAmount(state) {
            return state.noteAmount;
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
        [GENERATE_NOTES](state) {
            state.notes = [];
            let randomNote = [];
            let randomNoteType = [];

            for(let i = 0;i < state.noteAmount; i++){
                randomNote = store.getters.activeAvailableNotes[_.random(store.getters.activeAvailableNotes.length - 1)].note;
                randomNoteType = store.getters.activeNoteTypes[_.random(store.getters.activeNoteTypes.length - 1)].type;

                state.notes.push([randomNote, randomNoteType, "first", false]);

                if(randomNoteType == "eighth"){
                    state.notes.push([store.getters.activeAvailableNotes[_.random(store.getters.activeAvailableNotes.length - 1)].note, randomNoteType, "second", false]);
                }else if(randomNoteType == "sixteenth"){
                    state.notes.push([store.getters.activeAvailableNotes[_.random(store.getters.activeAvailableNotes.length - 1)].note, randomNoteType, "second", false]);
                    state.notes.push([store.getters.activeAvailableNotes[_.random(store.getters.activeAvailableNotes.length - 1)].note, randomNoteType, "third", false]);
                    state.notes.push([store.getters.activeAvailableNotes[_.random(store.getters.activeAvailableNotes.length - 1)].note, randomNoteType, "fourth", false]);
                }
            };
        },
        [TOGGLE_FILTER](state, payload) {
            const target = _.find(state[payload.category], payload.filterObject);
            target.active = !target.active;
        },
        [ADD_NOTE_AMOUNT](state) {
            if(state.noteAmount >= 4){
                state.noteAmount += 4;
            }else if(state.noteAmount == 2){
                state.noteAmount += 2;
            }
        },
        [REMOVE_NOTE_AMOUNT](state) {
            if(state.noteAmount > 4){
                state.noteAmount -= 4;
            }else if(state.noteAmount == 4){
                state.noteAmount -= 2;
            }
        },
        [SET_PLAYING_NOTE](state, index) {
            if(index == 0){
                state.notes[state.notes.length - 1][3] = false;
            }else {
                state.notes[index - 1][3] = false;
            }
            state.notes[index].splice(3, 1, true);
        }
    },
    actions: {

    }
});

export default store;
