const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const  SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let store = {

    _callSubscriber() {
        console.log("local function rerender in state.js");
    },
    _state: {
        profilePage: {
            postsState: [
                {id: 1, message: 'How are you ?', likescount: 3},
                {id: 2, message: 'We will rock U', likescount: 10},
                {id: 3, message: 'Check my Git', likescount: 0},
                {id: 4, message: 'Check my Greets', likescount: 0},
            ],
            newPostText: "",
        },
        dialogsPage: {

            dialogsState: [
                {
                    id: 1,
                    name: 'Dimich',
                    avatar: 'https://i.ytimg.com/vi/iJ4UGNGzJzY/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBnmgSojZdsUkxXfQLs7wK5dW0irw'
                },
                {
                    id: 2,
                    name: 'Maria',
                    avatar: 'https://www.seas.harvard.edu/sites/default/files/styles/embedded_image_large/public/images/news/zlatkova_maria_web_square.jpg?itok=Z2IqHSei'
                },
                {
                    id: 3,
                    name: 'Hannah',
                    avatar: 'https://cs50.harvard.edu/college/2019/fall/staff/media/Emma-Humphrey.png'
                },
                {id: 4, name: 'Rob', avatar: 'https://cra.org/wp-content/uploads/2018/05/Robert-Bowden.jpg'},
                {
                    id: 5,
                    name: 'David',
                    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/David_J._Malan.png/220px-David_J._Malan.png'
                },
                {
                    id: 6,
                    name: 'Victor',
                    avatar: 'https://i.ytimg.com/an/TW0FUhT0m-Bqg2trTbSs0g/featured_channel.jpg?v=5fc22bf3'
                }
            ],
            messageState: [
                {id: 1, message: "Hello"},
                {id: 2, message: "Hello World!"},
                {id: 3, message: "All love triangle"},
                {id: 4, message: "Nice 2 mu"},
                {id: 5, message: "Yo"},
                {id: 6, message: "Hello"},
            ],
            messageForSend: "",
            answerState: [
                {id: 1, message: "Hello, Dimich"},
                {id: 2, message: "I can write it on JS!"}
            ]
        },
        navBar: [
            {
                id: 1,
                name: 'Dimich',
                avatar: 'https://i.ytimg.com/vi/iJ4UGNGzJzY/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBnmgSojZdsUkxXfQLs7wK5dW0irw'
            },
            {
                id: 2,
                name: 'Maria',
                avatar: 'https://www.seas.harvard.edu/sites/default/files/styles/embedded_image_large/public/images/news/zlatkova_maria_web_square.jpg?itok=Z2IqHSei'
            },
            {
                id: 21,
                name: 'Victor',
                avatar: 'https://i.ytimg.com/an/TW0FUhT0m-Bqg2trTbSs0g/featured_channel.jpg?v=5fc22bf3'
            }
        ]

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    // dispatch(action) {
    //     if (action.type === "ADD-POST") {
    //         let newPost = {
    //             id: 5,
    //             message: this._state.profilePage.newPostText,
    //             likescount: 0
    //         }
    //         this._state.profilePage.postsState.push(newPost);
    //         this._state.profilePage.newPostText = '';
    //         this._callSubscriber(this._state);
    //     } else if (action.type === "UPDATE-NEW-POST-TEXT") {
    //         this._state.profilePage.newPostText = action.text;
    //         this._callSubscriber(this._state);
    //     } else if (action.type === "SEND-MESSAGE") {
    //         let newMessage = {
    //             id: 3,
    //             message: this._state.dialogsPage.messageForSend,
    //         }
    //         this._state.dialogsPage.answerState.push(newMessage);
    //         this._state.dialogsPage.messageForSend = '';
    //         this._callSubscriber(this._state);
    //     } else if (action.type === "UPDATE-MESSAGE") {
    //         this._state.dialogsPage.messageForSend = action.text;
    //         this._callSubscriber(this._state);
    //     }
    //
    // },
    dispatch(action){
        switch (action.type) {
            case("ADD-POST"):
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likescount: 0
                }
                this._state.profilePage.postsState.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            case("UPDATE-NEW-POST-TEXT"):
                this._state.profilePage.newPostText = action.text;
                this._callSubscriber(this._state);
                break;
            case("SEND-MESSAGE"):
                let newMessage = {
                    id: 3,
                    message: this._state.dialogsPage.messageForSend,
                }
                this._state.dialogsPage.answerState.push(newMessage);
                this._state.dialogsPage.messageForSend = '';
                this._callSubscriber(this._state);
                break;
            case("UPDATE-MESSAGE-TEXT"):
                this._state.dialogsPage.messageForSend = action.text;
                this._callSubscriber(this._state);
                break;
            default:
                console.log("Switch method of dispatch")
        }
    }

}

export const addPostActionCreator = () =>  ({type: ADD_POST});
export const updateNewPostText = (text) =>({type: UPDATE_NEW_POST_TEXT,text: text });
export const sendMessage = () =>  ({type: SEND_MESSAGE});
export const  updateMessageText = (text) =>({type:UPDATE_MESSAGE_TEXT,text: text });
window.store = store;

export default store;