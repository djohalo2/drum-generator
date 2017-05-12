import _ from 'lodash';

//Generate array of random generated notes
export default (state, activeAvailableNotes, activeNoteTypes) => {
    state.notes = [];
    let randomNote = [];
    let randomNoteType = [];

    for(let i = 0;i < state.noteAmount; i++){
        if(state.rudiment == "random"){
            randomNoteType = generateNoteType(activeNoteTypes);
        }else {
            randomNoteType = "sixteenth"
        }

        addNote(state, generateNote(activeAvailableNotes), randomNoteType, "first");

        if(randomNoteType == "eighth"){
            addNote(state, generateNote(activeAvailableNotes), randomNoteType, "second");
        }else if(randomNoteType == "sixteenth"){
            addNote(state, generateNote(activeAvailableNotes), randomNoteType, "second");
            addNote(state, generateNote(activeAvailableNotes), randomNoteType, "third");
            addNote(state, generateNote(activeAvailableNotes), randomNoteType, "fourth");
        }
    };
}

//Add note by combining given note properties into an array entry to the state notes
const addNote = (state, randomNote, randomNoteType, noteOrder) => {
    switch(true){
        case state.rudiment == "paradiddle" && noteOrder == "first":
            state.notes.push([randomNote, randomNoteType, noteOrder, false, true]);
            break;
        case state.rudiment == "paradiddle" && noteOrder != "first":
            state.notes.push([randomNote, randomNoteType, noteOrder, false, false]);
            break;
        default:
            state.notes.push([randomNote, randomNoteType, noteOrder, false, generateAccent()]);
            break;
    }
}
//Generate a random note from the available notes
const generateNote = (activeAvailableNotes) => {
    return activeAvailableNotes[_.random(activeAvailableNotes.length - 1)].note;
}
//Generate a random notetype from the available notetypes
const generateNoteType = (activeNoteTypes) => {
    return activeNoteTypes[_.random(activeNoteTypes.length - 1)].type;
}

const generateAccent = () => {
    let isAccented = Math.random() < 0.3 ? true : false;
    return isAccented;
}
