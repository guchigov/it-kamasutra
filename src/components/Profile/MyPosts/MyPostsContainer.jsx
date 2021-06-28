import React from "react";
import {addPostActionCreator, updateNewPostText} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let postChange = (text) => {
              props.store.dispatch(updateNewPostText(text));
    }

    return (<MyPosts updateNewPostText={postChange} addPostActionCreator={addPost}
                     postsState={state.profilePage.postsState}
                     newPostText={state.profilePage.newPostText} />);
}
export default MyPostsContainer;