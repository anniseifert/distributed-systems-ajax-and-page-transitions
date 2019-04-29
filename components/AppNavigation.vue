<!--This component contains the main site navigation and includes the AppGroupNav-->
<template>
    <div class="navigation">

        <app-group-nav/>

        <nav class="second-nav">
            <div class="nav-highlighter"
                 :class="{'topic' : (page === 'topic'),'room' : (page === 'room'),'members' : (page === 'members')}">
            </div>
            <ul>
                <nuxt-link to="/topic">
                    <li> {{ selectedGroup.navname }} topic</li>
                </nuxt-link>
                <nuxt-link to="/room">
                    <li>{{ selectedGroup.navname }} room</li>
                </nuxt-link>
                <nuxt-link to="/members">
                    <li>{{ selectedGroup.navname }} members</li>
                </nuxt-link>
            </ul>
        </nav>

    </div>


</template>

<script>
    import AppGroupNav from './AppGroupNav.vue'
    import {mapState, mapGetters} from 'vuex'


    export default {
        components: {
            AppGroupNav

        },
        computed: {
            ...mapState(['page']),
            ...mapGetters(['selectedGroup'])
        },
    }
</script>

<style scoped lang="scss">


    .nav-highlighter {
        transition: left 0.25s ease-out;
        opacity: 0;


        &.topic {
            left: 10px;
            opacity: 1;

        }

        &.room {
            left: calc(33.333% + 10px);
            opacity: 1;
        }

        &.members {
            left: calc(66.666% + 10px);
            opacity: 1;
        }
    }

    .change-enter-active, .change-leave-active {
        transition: background-color 0.5s ease-out;
    }

    .change-enter, .change-leave-to {
        background-color: red !important;
    }


    h2 {
        padding-left: 20px;
    }

    nav.second-nav {
        background-color: #fff;
        border-bottom: 10px solid #121542;
        position: relative;

        .nav-highlighter {
            position: absolute;
            width: calc(33.33333% - 20px);
            height: calc(100% - 20px);
            top: 10px;
            /*left: 10px;*/
            background-color: #e0c22a;
            transition: 1s all ease;

        }

        ul {
            list-style: none;
            width: 100%;

            display: flex;
            justify-content: space-around;
            padding-left: 10px;

            a {
                transition: all 2s ease;

                li {
                    display: inline-block;

                    text-transform: uppercase;
                    font-size: 25px;
                    color: #121542;
                    position: relative;
                    padding: 10px 20px;
                    z-index: 2;
                    font-weight: bold;
                }
            }

            a,
            a:active,
            a:visited {
                color: black;
                text-decoration: none;
            }
        }
    }


    .items,
    .list-move {
        transition: all 0.4s ease;
    }

    .list-leave-active {
        position: absolute;
    }

    #text {
        transform-origin: 50% 50%;
    }


</style>
