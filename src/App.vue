<template>
  <div id="app">
        <navigation></navigation>
        <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'app',
  components: {
      Navigation
  }
}

</script>

<style lang="scss">
@import '/style/variables.scss';
@import '../node_modules/bulma/bulma.sass';

html {
    height: 100%;
}
body {
    background-color: $light-grey;
    min-height: 100%;
}


</style>
