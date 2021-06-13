import {rerender} from "../render";

let state = {
    profilePage: {
        postsState: [
            {id: 1, message: 'How are you ?', likescount: 3},
            {id: 2, message: 'We will rock U', likescount: 10},
            {id: 3, message: 'Check my Git', likescount: 0},
            {id: 4, message: 'Check my Greets', likescount: 0},
        ],
    },
    dialogsPage: {

        dialogsState: [
            {id: 1, name: 'Dimich', avatar: 'https://i.ytimg.com/vi/iJ4UGNGzJzY/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBnmgSojZdsUkxXfQLs7wK5dW0irw'},
            {id: 2, name: 'Maria', avatar: 'https://www.seas.harvard.edu/sites/default/files/styles/embedded_image_large/public/images/news/zlatkova_maria_web_square.jpg?itok=Z2IqHSei'},
            {id: 3, name: 'Hannah', avatar: 'https://cs50.harvard.edu/college/2019/fall/staff/media/Emma-Humphrey.png'},
            {id: 4, name: 'Rob', avatar: 'https://cra.org/wp-content/uploads/2018/05/Robert-Bowden.jpg'},
            {id: 5, name: 'David', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/David_J._Malan.png/220px-David_J._Malan.png'},
            {id: 6, name: 'Victor', avatar: 'https://i.ytimg.com/an/TW0FUhT0m-Bqg2trTbSs0g/featured_channel.jpg?v=5fc22bf3'}
        ],
        messageState: [
            {id: 1, message: "Hello"},
            {id: 2, message: "Hello World!"},
            {id: 3, message: "All love triangle"},
            {id: 4, message: "Nice 2 mu"},
            {id: 5, message: "Yo"},
            {id: 6, message: "Hello"},
        ]
    },
    navBar: [
    {id: 1, name: 'Dimich', avatar: 'https://i.ytimg.com/vi/iJ4UGNGzJzY/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBnmgSojZdsUkxXfQLs7wK5dW0irw'},
    {id: 2, name: 'Maria', avatar: 'https://www.seas.harvard.edu/sites/default/files/styles/embedded_image_large/public/images/news/zlatkova_maria_web_square.jpg?itok=Z2IqHSei'},
    {id: 21, name: 'Victor', avatar: 'https://i.ytimg.com/an/TW0FUhT0m-Bqg2trTbSs0g/featured_channel.jpg?v=5fc22bf3'}
    ]

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likescount:0
    }
        state.profilePage.postsState.push(newPost);
    rerender(state);
}

export let sendMessage = (textMessage) => {
    let newMessage = {
        id: 7,
        message: textMessage,
    }
    state.dialogsPage.messageState.push(newMessage);
    rerender(state);
}


export default state;