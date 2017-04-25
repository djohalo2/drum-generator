<template>
    <div class="nav-wrapper">
        <div class="top-bar">
            <a href="#">
                Github repository
            </a>
        </div>
        <nav class="nav">

          <div class="nav-left">
            <a class="nav-item">
                <strong class="nav-title">DRUMGEN</strong>
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
    </div>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style scoped lang="scss">
    .top-bar {
        width:100%;
        background: #1D1D1D;
        padding: 0.3rem;
        text-align: center;

        a {
            color: #E4E4E4;
        }

    }
    .nav {
        background: #f2d435;
        height: 4rem;
        color: #1D1D1D;

        .nav-title {
            font-size: 1.1rem;
        }

    }

    a {
        color: #1D1D1D;
        padding: 1rem;
        font-size: 0.9rem;
    }

    a:hover {
        color: #f2d435;
    }
</style>
