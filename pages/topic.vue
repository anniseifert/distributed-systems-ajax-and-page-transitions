<!--This is the topic site template-->
<template>
    <div class="content">
        <h2>Project Type of {{selectedGroup.name}}: {{ selectedGroup.projectType }} </h2>
        <div class="container">
            <p class=""> {{ selectedGroup.descriptionOne }}</p>
            <img class="topic-image right" v-bind:src="'/' + selectedGroup.imgOne">
        </div>
        <div class="container">
            <img class="topic-image left" v-bind:src="'/' + selectedGroup.imgTwo">
            <p class=""> {{ selectedGroup.descriptionTwo }}</p>
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
    }
</script>

<style scoped lang="scss">

    .page-enter-active, .page-leave-active {
        transition: opacity .25s ease-out;
    }
    .page-enter, .page-leave-to {
        opacity: 0;
    }

    .content {
        padding: 20px;
        margin-bottom: 20px;
    }

    .topic-image {
        height: 300px;
        border: 5px solid white;

        &.left {
            margin-right: 20px;
        }

        &.right {
            margin-left: 20px;
        }
    }

    .container {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        background-color: #121542;
        margin-bottom: 40px;

        p {
            color: white;
        }

    }
</style>