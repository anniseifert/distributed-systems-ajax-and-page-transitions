<!--This is the members site template-->
<template>
    <div class="content">
        <div class="wrapper">

            <div>
                <p>Click to see next member rendered trough AJAX Request!</p>
                <div class="info-area">
                    <img style="width: 300px; height: 300px;" id="profile-pic-ajax" src="/user/default.png">
                    <div>
                        <dl id="member-list-ajax" data-active-member="start">
                            <dt>Name:</dt>
                            <dd id="name-ajax">Click to send data request</dd>
                            <dt>Specification:</dt>
                            <dd id="specification-ajax">Click to send data request</dd>
                            <dt>Comment:</dt>
                            <dd id="comment-ajax">Click to send data request</dd>
                        </dl>
                        <button v-on:click="getMembersAjax" id="next-member-ajax">See next member</button>
                    </div>
                </div>
            </div>

            <div>
                <p>Click to see next member rendered from Vuex Store!</p>
                <div class="info-area">
                    <img style="width: 300px; height: 300px;" id="profile-pic"
                         :src="'/user/' + selectedGroup.members[0].profilepic">
                    <div>
                        <dl id="member-list" data-active-member="0">
                            <dt>Name:</dt>
                            <dd id="name">{{selectedGroup.members[0].name}}</dd>
                            <dt>Specification:</dt>
                            <dd id="specification">{{selectedGroup.members[0].specification}}</dd>
                            <dt>Comment:</dt>
                            <dd id="comment">{{selectedGroup.members[0].comment}}</dd>
                        </dl>
                        <button v-on:click="getMembers(selectedGroup)" id="next-member">See next member</button>
                    </div>
                </div>
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
        methods: {
            replaceNextMember(data) {
                //got user information from ajax request

                //filter information fpr selected group
                var selectedGroup = this.selectedGroup.jsonname;
                var group = (data[selectedGroup]);

                var memberlist = document.getElementById("member-list-ajax");
                var memberLength = parseInt(group.length);
                memberLength--;
                console.log(memberLength);

                var dataActiveMember = memberlist.getAttribute("data-active-member");

                console.log(dataActiveMember);

                if (dataActiveMember == memberLength) {
                    memberlist.setAttribute("data-active-member", "0");
                    dataActiveMember = 0;
                } else if (dataActiveMember == "start") {
                    dataActiveMember = 0;
                } else {
                    dataActiveMember++;
                }

                var nextMember = group[dataActiveMember];

                var nameElement = document.getElementById("name-ajax");
                var specElement = document.getElementById("specification-ajax");
                var commentElement = document.getElementById("comment-ajax");
                var profilePicElement = document.getElementById("profile-pic-ajax");

                nameElement.innerHTML = nextMember.name;
                specElement.innerHTML = nextMember.specification;
                commentElement.innerHTML = nextMember.comment;
                profilePicElement.src = ("/user/" + nextMember.profilepic);


                memberlist.setAttribute("data-active-member", dataActiveMember.toString());
            },

            getMembers(selectedGroup){
                var memberlist = document.getElementById("member-list");
                var memberLength = parseInt(selectedGroup.members.length);
                memberLength--;

                var dataActiveMember = parseInt(memberlist.getAttribute("data-active-member"));

                if (dataActiveMember == memberLength) {

                    dataActiveMember = 0;
                    memberlist.setAttribute("data-active-member", "0");
                } else {
                    dataActiveMember++;
                    var dataActiveMemberStr = dataActiveMember.toString();
                    memberlist.setAttribute("data-active-member", dataActiveMemberStr);
                }

                var nameElement = document.getElementById("name");
                var SpecElement = document.getElementById("specification");
                var CommentElement = document.getElementById("comment");
                var profilePicElement = document.getElementById("profile-pic");

                nameElement.innerHTML = selectedGroup.members[dataActiveMember].name;
                SpecElement.innerHTML = selectedGroup.members[dataActiveMember].specification;
                CommentElement.innerHTML = selectedGroup.members[dataActiveMember].comment;
                profilePicElement.src = ("/user/" + selectedGroup.members[dataActiveMember].profilepic);
            },

            getMembersAjax() {
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
            }
        }
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

    .wrapper {
        display: flex;
        justify-content: space-between;

       > div {
            width: 49%;
        }

        p {
            background-color: #121425;
            color: white;
            padding: 5px 20px;
            font-weight: bold;
            font-size: 20px;
        }


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
        display: flex;
        padding: 20px;


        #profile-pic, #profile-pic-ajax {
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