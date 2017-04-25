<template>
    <header class="header">
        <h1>Drum generator</h1>
    </header>
</template>

<script>
export default {
  name: 'top-header'
}
</script>

<style scoped lang="scss">
    h1 {
        font-size: 2.5rem;
        color: #fff;
    }

    .header {
        text-align: center;
        padding: 5rem;
        background-image: url('/static/img/header.jpg');
    }
</style>
