<template>
        <li v-bind:class="{'is-playing': isPlaying}">
            <img v-if="noteOrder == 'second' && noteType == 'eighth'" v-bind:src="'/static/img/notes/' + noteType + '-bar.png'"/>
            <img v-if="noteOrder == 'first'" v-bind:src="'/static/img/notes/' + noteName + '-' + noteType +  '-first.png'"/>
            <img v-if="noteOrder != 'first'" v-bind:src="'/static/img/notes/' + noteName + '-' + noteType +  '-second.png'"/>
            <img
                v-if="noteOrder == 'second' && noteType == 'eighth' || noteOrder == 'fourth' && noteType == 'sixteenth' || noteOrder == 'first' && noteType == 'quarter'"
                src="/static/img/notes/gap.png"
            />
        </li>
</template>

<script>
export default {
    name: 'note',
    props: ['noteName', 'noteType', 'noteOrder'],
    data() {
        return {
            isPlaying: false

        }
    }
}

</script>

<style scoped>
    .is-playing {
        color: #f2d435;
    }

    li, strong {
        color: #1D1D1D;
    }

    li {
        padding: 0;
        display: inline-block;
    }

    img {
        width:30px;
        height:120px;
        margin: 0;
        padding:0;
        display: inline-block;
        float:left;
    }
</style>
