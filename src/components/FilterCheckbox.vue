<template>
    <div class="field">
        <p class="control">
          <label class="checkbox">
            <input v-on:click="toggleFilter" v-model="checked" type="checkbox">
            {{ noteType }}
          </label>
        </p>
    </div>
</template>

<script>
export default {
    name: 'filter-checkbox',
    props: ['noteType'],
    data(){
        return {
            checked: true
        }
    },
    methods: {
        toggleFilter() {
            this.$emit('filter-toggled');
        }
    }
}

</script>

<style scoped>

</style>
