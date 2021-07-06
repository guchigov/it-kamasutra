const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState =  {
    postsState: [
        {id: 1, message: 'How are you ?', likescount: 3},
        {id: 2, message: 'We will rock U', likescount: 10},
        {id: 3, message: 'Check my Git', likescount: 0},
        {id: 4, message: 'Check my Greets', likescount: 0},
    ],
    newPostText: "",
};


const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case("ADD-POST"): {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likescount: 0
            }
            let stateCopy = {...state};
            stateCopy.postsState = [...state.postsState];
            stateCopy.postsState.unshift(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
    }
        case("UPDATE-NEW-POST-TEXT"): {
            let stateCopy = {...state};
            stateCopy.newPostText = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () =>  ({type: ADD_POST});
export const updateNewPostText = (text) =>({type: UPDATE_NEW_POST_TEXT,text: text });

export default profilePageReducer;