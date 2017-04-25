<template>
    <div>
        <button v-on:click="removeNoteAmount" class="button is-medium is-primary amount-button"><span>-</span></button>
        <span class="amount-counter">{{ noteAmount }}</span>
        <button v-on:click="addNoteAmount" class="button is-medium is-primary amount-button"><span>+</span></button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'note-amount',
    computed: {
        ...mapGetters({
                noteAmount: 'noteAmount'
        })
    },
    methods: {
        addNoteAmount() {
            this.$store.commit('ADD_NOTE_AMOUNT');
        },
        removeNoteAmount() {
            this.$store.commit('REMOVE_NOTE_AMOUNT');
        }
    }
}

</script>

<style scoped lang="scss">

    .amount-counter {
        font-weight: bold;
        font-size: 2rem;
        padding: 0 1rem;
    }

    .amount-button {
        width: 45px;
        height: 45px;
        span {
            font-size: 1.7rem;
        }
    }
</style>
