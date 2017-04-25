<template>
    <div class="field">
        <p class="control">
          <label class="checkbox">
            <input v-on:click="toggleFilter(filterObject, category)" v-model="checked" type="checkbox">
            {{ filter }}
          </label>
        </p>
    </div>
</template>

<script>
export default {
    name: 'filter-checkbox',
    props: ['filter', 'value', 'filterObject', 'category'],
    computed: {
        checked(){
            return this.value
        }
    },
    methods: {
        toggleFilter(filterObject, category){
            const payload = {
                filterObject: filterObject,
                category: category
            };
            this.$store.commit('toggleFilter', payload);
        }
    }
}

</script>

<style scoped>

</style>
