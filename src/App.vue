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

.box {
    border-radius: 1px;
    box-shadow: 0 2px 3px rgba(29, 29, 29, 0.05), 0 0 0 1px rgba(29, 29, 29, 0.05);
}


</style>
