<template>
    <header class="header">
        <h1>DRUMGEN</h1>
        <p>A drum fill generator made for every kind of drummer</p>
    </header>
</template>

<script>
export default {
  name: 'top-header'
}
</script>

<style scoped lang="scss">
    .header {
        text-align: center;
        padding: 5rem;
        background-image: url('/static/img/header.jpg');

        h1 {
            font-size: 2.2rem;
            font-weight: 500;
            color: #fff;
            margin-bottom: 1rem;
        }

        p {
            color: #F7F7F7;
        }

    }
</style>
