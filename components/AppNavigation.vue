<template>
    <div class="navigation">
        <nav class="group-nav">
            <app-group-nav/>
        </nav>
        <!--<nav class="second-nav"  v-if="(page !== 'index')">-->
        <nav class="second-nav">
            <div class="nav-highlighter" :class="{'topic' : (page === 'topic'),'room' : (page === 'room'),'members' : (page === 'members')}">&nbsp;
            </div>

            <ul>
                <nuxt-link to="/topic">
                    <li> {{ selectedGroup.navname}} topic</li>
                </nuxt-link>
                <nuxt-link to="/room">
                    <li>{{ selectedGroup.navname}} room</li>
                </nuxt-link>
                <nuxt-link to="/members">
                    <li>{{ selectedGroup.navname}} members</li>
                </nuxt-link>
            </ul>
        </nav>


    </div>


</template>

<script>
    import AppGroupNav from './AppGroupNav.vue'
    import {mapState, mapGetters} from 'vuex'
    import {TweenMax, TimelineMax, Sine, Expo} from 'gsap'


    export default {
        data() {
            return {
                saved: false,
                menuOpened: false
            }
        },
        components: {
            AppGroupNav

        },
        computed: {
            ...mapState(['page']),
            ...mapGetters(['selectedGroup'])
        },
        props: {
            selectedUser: {
                type: Object
            }
        },

        methods: {
            beforeEnter(el) {
                TweenMax.set(el, {
                    scale: 0.5,
                    transformOrigin: '100% 0%'
                })
                TweenMax.set(el.childNodes, {
                    scale: 2
                })
            },
            enter(el, done) {
                TweenMax.fromTo(
                    el,
                    0.2,
                    {
                        opacity: 0.5,
                        scale: 0
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        ease: Sine.easeOut
                    }
                )
                TweenMax.staggerFromTo(
                    el.childNodes,
                    0.45,
                    {
                        opacity: 0.5
                    },
                    {
                        delay: 0.1,
                        opacity: 1,
                        ease: Sine.easeOut
                    },
                    0.04
                )
                done()
            }
        }

    }
</script>

<style scoped lang="scss">


    .nav-highlighter {
        transition: left ease 1s;
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
