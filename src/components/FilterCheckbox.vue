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
            this.$store.commit('TOGGLE_FILTER', payload);
        }
    }
}

</script>

<style scoped>
    label {
        color: #F7F7F7;
        font-size: 0.9rem;
        padding: 0.4rem 0;
    }

    [type="checkbox"]:not(:checked),
    [type="checkbox"]:checked {
        background: red;
    }
</style>
