<template>
    <div id="app">
        <navigation></navigation>
        <router-view></router-view>
        <footer-component></footer-component>
    </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import FooterComponent from './components/Footer.vue';

export default {
  name: 'app',
  components: {
      Navigation,
      FooterComponent
  }
}

</script>

<style lang="scss">
@import '/style/variables.scss';
@import '../node_modules/bulma/bulma.sass';
@import '../node_modules/font-awesome/css/font-awesome.min.css';


html {
    height: 100%;
}
body {
    background-color: $light-grey;
    min-height: 100%;
}

.box {
    border-radius: 1px;
    padding: 0.9rem;
    box-shadow: 0 2px 3px rgba(29, 29, 29, 0.05), 0 0 0 1px rgba(29, 29, 29, 0.05);
}

.text-black {
    color: $black;
    font-size:16px;
    font-weight: 500;
}

</style>
