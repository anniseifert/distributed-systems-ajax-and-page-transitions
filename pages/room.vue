<template>
    <div class="content">
        <h2>You can find {{selectedGroup.name}} here:</h2>
        <div :class="selectedGroup.room">
            <img class="floorplan" src="../static/floor-plan.png">
            <div class="pointer">&nbsp;</div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapState(['page']),
            ...mapGetters(['selectedGroup'])
        },
        props: {
            selectedUser: {
                type: Object
            }
        }
    }
</script>

<style scoped lang="scss">

    .floorplan {
        height: auto;
        width: 100%;
    }

    .content {
        padding: 20px;
        margin-bottom: 20px;
    }

    [class^="room"] {
        position: relative;
        margin: 0 auto;
        width: 50%
    }

    .pointer {
        border: 10px solid yellow;
        border-radius: 50px;
        width: 50px;
        height: 50px;
        position: absolute;
        left: 0;
        top: 0;
    }


    .room-1 {
        .pointer {
            left: 47%;
            top: 7%;
        }
    }

    .room-2 {
        .pointer {
            left: 78%;
            top: 48%;

        }
    }

    .room-3 {
        .pointer {
            left: 69%;
            top: 76%;

        }
    }

</style>