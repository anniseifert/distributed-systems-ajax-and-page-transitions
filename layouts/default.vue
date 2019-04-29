<!--This is the default page layout-->
<template>
    <div>
        <header>
            <nuxt-link to="/" class="subtitle-link">
                <h1>Ajax and page transitions - Group Projects Demo</h1>
            </nuxt-link>
            <a href="/statichtml/topic.html" class="change-web" target="_blank">Visit static website</a>
            <app-navigation/>
        </header>

        <nuxt/>

        <footer>
            <p>Git Repo: <a target="_blank"
                            href="https://github.com/anniseifert/distributed-systems-ajax-and-page-transitions">https://github.com/anniseifert/distributed-systems-ajax-and-page-transitions</a>
            </p>
            <p>Made by Anni Seifert, Dresden</p>
        </footer>
    </div>
</template>

<script>

    import AppNavigation from '~/components/AppNavigation.vue'
    import {store} from '../store'

    export default {
        components: {
            AppNavigation
        },
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

    .change-web {
        text-align: center;
        display: block;
        color: white;
        font-size: 30px;
        font-weight: bold;
        text-transform: uppercase;
        padding: 30px 0;
        text-decoration: none;
    }

    .change-web:hover {
        color: #e0c22a
    }

    footer {
        background-color: #121542;
        color: white;
        padding: 10px 20px;
        bottom: 0;
        width: 100%;

        p {
            a {
                color: white;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }


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


    .subtitle-link {
        text-decoration: none;
    }
</style>

