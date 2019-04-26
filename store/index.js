import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            page: 'index',
            indexedGroup: 0,
            groups: [
                {
                    name: 'Backslash Boys',
                    navname: 'Backslash Boys\'',
                    jsonname: 'backslashboys',
                    img: '/groups/computer-project.jpg',
                    imgOne: 'computer-project-1.jpg',
                    imgTwo: 'computer-project-2.jpg',
                    descriptionOne: 'Let\'s have a look at this project called Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    descriptionTwo: 'You should consider to Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    room: 'room-1',
                    projectType: 'IT Project',
                    members: [
                        {
                            "name": "Suzie",
                            "specification": "UX Design",
                            "comment": "I'm looking forward to a nice IT project to have a huge project at the end!",
                            "profilepic": "girl-1.jpg"
                        },
                        {
                            "name": "Kay",
                            "specification": "Frontend and JavaScript Programming",
                            "comment": "This could be the best chance to improve my knowledge in backend programming.",
                            "profilepic": "boy-1.jpg"
                        },
                        {
                            "name": "Sandra",
                            "specification": "Project Management",
                            "comment": "Lorem Ipsum!",
                            "profilepic": "girl-2.jpg"
                        },
                        {
                            "name": "Ramond",
                            "specification": "System administration",
                            "comment": "I'm happy to join this team and work together in a group where I can say my opinions and discuss in\n                a nice way.'",
                            "profilepic": "boy-2.jpg"
                        }

                    ]

                },
                {
                    name: 'IT Cloud',
                    navname: 'IT Cloud\'s',
                    jsonname: 'itcloud',
                    img: '/groups/art-project.jpg',
                    imgOne: 'art-project-1.jpg',
                    imgTwo: 'art-project-2.jpg',
                    descriptionOne: 'This is a nice project description Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    descriptionTwo: 'We started this project in 2019 when Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    room: 'room-2',
                    projectType: 'Art Project',
                    members: [
                        {
                            "name": "Kira",
                            "specification": "UX Design",
                            "comment": "I\\'m looking forward to a nice IT project to have a huge project at the end",
                            "profilepic": "girl-3.jpg"
                        },
                        {
                            "name": "Jazmine",
                            "specification": "Frontend and JavaScript Programming",
                            "comment": "This could be the best chance to improve my knowledge in frontend programming",
                            "profilepic": "girl-4.jpg"
                        }

                    ]
                },
                {
                    name: 'Databasement',
                    navname: 'Databasement\'s',
                    jsonname: 'databasement',
                    img: '/groups/engineering-project.jpg',
                    imgOne: 'engineering-project-1.jpg',
                    imgTwo: 'engineering-project-2.jpg',
                    descriptionOne: 'What we can say about this project is Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    descriptionTwo: 'It\'s outstandig that Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    room: 'room-3',
                    projectType: 'Engineering Project',
                    members: [
                        {
                            "name": "Paul",
                            "specification": "Full Stack Development",
                            "comment": "I'm so happy to join this team!",
                            "profilepic": "boy-3.jpg"
                        },
                        {
                            "name": "Lukas",
                            "specification": "Electrical Engineering",
                            "comment": "This feels like a once in a lifetime opportunity!",
                            "profilepic": "boy-4.jpg"
                        },
                        {
                            "name": "Mary",
                            "specification": "Architecture",
                            "comment": "I could have never imagined to be a part of such a huge project!",
                            "profilepic": "girl-5.jpg"
                        }
                    ]
                },
            ],


        },
        getters: {
            selectedGroup: state => {
                return state.groups[state.indexedGroup]
            }
        },
        mutations: {
            updatePage(state, pageName) {
                state.page = pageName
            },
            changeGroup(state, i) {
                state.indexedGroup = i
            }
        }

    })
}


export default createStore