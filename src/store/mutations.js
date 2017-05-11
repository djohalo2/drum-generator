import { GENERATE_NOTES, TOGGLE_FILTER, ADD_NOTE_AMOUNT, REMOVE_NOTE_AMOUNT, SET_PLAYING_NOTE, SET_NOTE_COMPONENTS, CLEAR_PLAYING_NOTES } from './mutation-types';

export default {
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
    },
    [CLEAR_PLAYING_NOTES](state) {
        for(let note in state.notes){
            state.notes[note].splice(3, 1, false);
        };
    }
}
