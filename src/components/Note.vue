<template>
        <li>
            <p v-if="isAccented" class="accent">></p>
            <img v-if="noteOrder == 'second' && noteType == 'eighth'" v-bind:src="'/static/img/notes/' + noteType + '-bar.png'"/>
            <img v-if="noteOrder == 'first' && !isPlaying" v-bind:src="'/static/img/notes/' + noteName + '-' + noteType +  '-first.png'"/>
            <img v-if="noteOrder != 'first' && !isPlaying" v-bind:src="'/static/img/notes/' + noteName + '-' + noteType +  '-second.png'"/>

            <img v-if="noteOrder == 'first' && isPlaying" v-bind:src="'/static/img/notes/' + noteName + '-' + noteType +  '-first-active.png'"/>
            <img v-if="noteOrder != 'first' && isPlaying" v-bind:src="'/static/img/notes/' + noteName + '-' + noteType +  '-second-active.png'"/>

            <img
                v-if="noteOrder == 'second' && noteType == 'eighth' || noteOrder == 'fourth' && noteType == 'sixteenth' || noteOrder == 'first'
                && noteType == 'quarter'" src="/static/img/notes/gap.png"
            />
        </li>
</template>

<script>
export default {
    name: 'note',
    props: ['noteName', 'noteType', 'noteOrder', 'index', 'isAccented'],
    computed: {
        isPlaying() {
            return this.$store.getters.generatedNotes[this.index][3];
        }
    }
}

</script>

<style scoped lang="scss">
    .is-playing {
        color: #f2d435;
    }

    li, strong {
        color: #1D1D1D;
    }

    li {
        padding: 0;
        display: inline-block;
        position:relative;
    }

    img {
        width:30px;
        height:120px;
        margin: 0;
        padding:0;
        display: inline-block;
        float:left;
    }

    .accent {
        font-weight: 500;
        margin: 0;
        padding: 0;
        position: absolute;
        top: -1.5rem;;
        left: 0.5rem;
    }
</style>
