export default {
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
}
