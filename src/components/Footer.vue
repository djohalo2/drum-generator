<template>
    <footer class="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p>Made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="http://ditwebdesign.com" target="_blank">Djovanni Tehubijuluw</a></p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'footer-component'
}
</script>

<style scoped lang="scss">
    .footer {
        padding: 1.5rem;
        margin-top: 3rem;
        background-color: #1D1D1D;


        .container {
            margin-top: 0;

            p, a {
                color: #fff;

                .fa-heart {
                    color: #e74c3c;
                    margin-top: 5px;
                    padding: 0 0.2rem;
                }
            }
        }
    }
</style>
