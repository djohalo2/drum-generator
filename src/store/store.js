import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import { GENERATE_NOTES } from './mutation-types';

import _ from 'lodash';
import generator from '../scripts/fill-generator';

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
            generator(state, store.getters.activeAvailableNotes, store.getters.activeNoteTypes);
        }
    },
    actions
});

export default store;
