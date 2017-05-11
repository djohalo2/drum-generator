import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import { GENERATE_NOTES } from './mutation-types';

import _ from 'lodash';

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
        playing: false
    },
    getters,
    mutations: {
        ...mutations,
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
    },
    actions
});

export default store;
