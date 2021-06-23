const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";



const profilePageReducer = (state, action) => {
    switch (action.type) {
        case("ADD-POST"):
            let newPost = {
                id: 5,
                message: state.newPostText,
                likescount: 0
            }
            state.postsState.push(newPost);
            state.newPostText = '';
            return state;
        case("UPDATE-NEW-POST-TEXT"):
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}


export const addPostActionCreator = () =>  ({type: ADD_POST});
export const updateNewPostText = (text) =>({type: UPDATE_NEW_POST_TEXT,text: text });

export default profilePageReducer;