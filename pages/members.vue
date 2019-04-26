<template>
    <div class="content">
        <div class="info-area">
            <img style="width: 300px; height: 300px;" id="profile-pic" :src="'/user/' + selectedGroup.members[0].profilepic">
            <div>
                <dl id="member-list" data-counter="0" data-active-member="0">
                    <dt>Name:</dt>
                    <dd id="name">{{selectedGroup.members[0].name}}</dd>
                    <dt>Specification:</dt>
                    <dd id="specification">{{selectedGroup.members[0].specification}}</dd>
                    <dt>Comment:</dt>
                    <dd id="comment">{{selectedGroup.members[0].comment}}</dd>
                </dl>
                <button v-on:click="getMembers" id="next-member">See next member</button>
            </div>
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
        },
        methods: {
            replaceNextMember(data) {


                //got user information from ajax request

                //filter information fpr selected group
                var selectedGroup = this.selectedGroup.jsonname;
                var group = (data[selectedGroup]);

                var memberlist = document.getElementById("member-list");
                var memberLength = parseInt(group.length);
                memberLength--;
                console.log(memberLength);

                var dataActiveMember = parseInt(memberlist.getAttribute("data-active-member"));


                // var dataNextMember = (dataActiveMember + 1);

                // var activeMember = group[dataActiveMember];
                console.log(dataActiveMember);

                if (dataActiveMember == memberLength) {
                    memberlist.setAttribute("data-active-member", "0");
                    dataActiveMember = 0;
                } else {
                    dataActiveMember++;
                }


                var nextMember = group[dataActiveMember];

                var nameElement = document.getElementById("name");
                var SpecElement = document.getElementById("specification");
                var CommentElement = document.getElementById("comment");
                var profilePicElement = document.getElementById("profile-pic");

                nameElement.innerHTML = nextMember.name;
                SpecElement.innerHTML = nextMember.specification;
                CommentElement.innerHTML = nextMember.comment;
                profilePicElement.src = ("/user/" + nextMember.profilepic);


                memberlist.setAttribute("data-active-member", dataActiveMember.toString());
            },

            setMember(data) {

                var selectedGroup = this.selectedGroup.jsonname;
                var group = (data[selectedGroup]);

                var nextMember = group[0];

                var nameElement = document.getElementById("name");
                var SpecElement = document.getElementById("specification");
                var CommentElement = document.getElementById("comment");
                var profilePicElement = document.getElementById("profile-pic");

                nameElement.innerHTML = nextMember.name;
                SpecElement.innerHTML = nextMember.specification;
                CommentElement.innerHTML = nextMember.comment;
                profilePicElement.src = ("/user/" + nextMember.profilepic);
            },
            getMembers() {
                let _this = this;

                var httpRequest = new XMLHttpRequest();
                httpRequest.onreadystatechange = function () {
                    if (httpRequest.readyState === 4) {
                        if (httpRequest.status === 200) {
                            var data = JSON.parse(httpRequest.responseText);
                            _this.replaceNextMember(data);
                        }
                    }
                };
                httpRequest.open('GET', "members.json");
                httpRequest.send();

            },


            activateFirstMember() {


            }

        },

        mounted() {
            this.activateFirstMember();
        }
    }

</script>

<style scoped lang="scss">

    .content {
        padding: 20px;
        margin-bottom: 20px;

    }

    button {
        background-color: transparent;
        color: white;
        border: 5px solid white;
        margin: 20px 0;
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        padding: 10px;
        text-transform: uppercase;

        &:hover {
            background-color: #e0c22a;
            cursor: pointer;
            color: #121542;
        }

    }

    .info-area {
        background-color: #121542;
        width: 75%;
        margin: 0 auto;
        display: flex;
        padding: 20px;

        #profile-pic {
            width: 300px;
            height: 300px;
            border: 5px solid white;

            display: block;
            border-radius: 300px;
            margin-right: 20px;

        }


    }

    dl {


        dt {
            font-weight: bold;
            font-size: 20px;
            color: white;
        }


        dd {
            color: white;
            margin-bottom: 10px;

        }
    }

</style>