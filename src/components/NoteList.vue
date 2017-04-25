<template>
    <div>
        <ul class="notelist">
            <note :key="note" class="note-item" v-for="note in notes" :noteName="note[0]" :noteType="note[1]" :noteOrder="note[2]"></note>
        </ul>
    </div>
</template>

<script>
import Note from './Note.vue';

export default {
    name: 'note-list',
    components: {
        Note
    },
    computed: {
        notes(){
            return this.$store.getters.generatedNotes;
        }
    }
}
</script>

<style scoped>
    ul {
        margin: 1.5rem 0;
    }
</style>
