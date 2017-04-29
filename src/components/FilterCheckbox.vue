<template>
    <div class="field filter-item">
        <p class="control">
          <label class="checkbox">
            <input v-on:click="toggleFilter(filterObject, category)" v-model="checked" type="checkbox">
            <span class="label-text">{{ filter }}</span>
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
            this.$store.commit('TOGGLE_FILTER', payload);
        }
    }
}

</script>

<style scoped lang="scss">
    label {
        color: #1D1D1D;
        font-size: 0.9rem;
        padding: 0.2rem 0;

        &:hover {
            color: #f2d435;
        }
    }


</style>
