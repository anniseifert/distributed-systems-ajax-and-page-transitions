<template>
    <ul class="group-navigation">

        <li v-for="(group, i) in groups"
            @click="changeGroup(i)"
            :key="group.name" class="group-item" :data="group.name">
            <img :src="group.img"/>
            <span>{{ group.name }}</span>
        </li>
    </ul>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    import { store } from '../store'

    export default {
        data() {
            return {
                saved: false,
                menuOpened: false,
            }
        },
        computed: {
            ...mapState(['page', 'groups', 'indexedUser']),
            ...mapGetters(['selectedGroup'])

        },

        methods: {
            changeGroup(i) {
                this.$store.commit('changeGroup', i);
                var thisli = event.target.parentElement;
                var thislisiblings = thisli.parentElement.childNodes;
                for (var j = 0; j < thislisiblings.length; j++) {
                    thislisiblings[j].classList.remove('active');
                }

                thisli.classList.add("active");
                // this.activateFirstMember();



            //    TODO reload page under navigation (members)
            },

            activateSelectedGroup() {
                var groupitems = document.getElementsByClassName("group-item");
                var selectedGroup = this.selectedGroup.name;

                for (var j = 0; j < groupitems.length; j++) {
                    groupitems[j].classList.remove('active');
                }

                for (var j = 0; j < groupitems.length; j++) {
                    var data = groupitems[j].getAttribute('data');
                    if (data == selectedGroup) {
                        groupitems[j].classList.add("active");
                    }
                }
            }
        },

        mounted() {
            this.activateSelectedGroup();
        }
    }

</script>

<style scoped lang="scss">

    .group-navigation {
        display: flex;
        width: 50%;
        margin: 0 auto 40px;
        justify-content: center;

        li {
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 10px;
            border: 10px solid transparent;
            transition: all ease 0.5s;

            &:hover {
                cursor: pointer;
            }

            > img {
                width: 80px;
                height: 80px;
                border-radius: 100px;
                border: 5px solid white;
            }

            &.active {
                transform: scale(1.5);
            }
        }
    }

</style>