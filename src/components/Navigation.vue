<template>
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item">
            DRUMGENERATOR
        </a>
      </div>

      <div class="nav-center">
        <a class="nav-item">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>
        <a class="nav-item">
          <span class="icon">
            <i class="fa fa-twitter"></i>
          </span>
        </a>
      </div>

      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div class="nav-right nav-menu">
        <a class="nav-item">
          Generator
        </a>
        <a class="nav-item">
          About
        </a>
        <a class="nav-item">
          Contact
        </a>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style scoped lang="scss">
    .nav {
        background: #1D1D1D;
        height: 4rem;
        color: #F7F7F7;

    }

    a {
        color: #F7F7F7;
        padding: 1rem;
        font-size: 0.9rem;
    }

    a:hover {
        color: #f2d435;
    }
</style>
