<template>

    <div>
        <header>
            <h1>Ajax and page transitions</h1>
            <nuxt-link to="/" class="subtitle-link"><p class="subtitle">Group Projects</p></nuxt-link>
            <app-navigation/>
        </header>

        <nuxt/>

        <footer>
            <p>Git Repo:</p>
            <p>Made by Anni Seifert, Dresden</p>
        </footer>
    </div>
</template>

<script>

    import AppNavigation from '~/components/AppNavigation.vue'

    export default {
        components: {
            AppNavigation,
        }
    }
</script>

<style lang="scss">
    html {
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
    }

    header {
        background-color: #121542;
    }

    footer {
        background-color: #121542;
        color: white;
        padding: 10px 20px;
        bottom: 0;
        width: 100%;


    }

    h1 {
        font-weight: bold;
        font-size: 14px;
        width: 100%;
        color: #fff;
        background-color: #121542;
        text-transform: uppercase;
        padding: 10px 10px 10px 20px;
        text-align: center;
        margin-bottom: 0;
        padding-bottom: 0;
    }
    .subtitle {
        font-family: sans-serif;
        font-weight: bold;
        font-size: 50px;
        width: 100%;
        color: #fff;
        text-transform: uppercase;
        padding: 10px 10px 10px 20px;
        text-align: center;
        margin-bottom: 20px;
        text-decoration: none;
    }

    .subtitle-link {
        text-decoration: none;
    }
</style>

