import React from "react";
import {addPostActionCreator, updateNewPostText} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import storeContext from "../../../storeContext";


const MyPostsContainer = () => {

    return (
        <storeContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let postChange = (text) => {
                        store.dispatch(updateNewPostText(text));
                    }
                    return <MyPosts updateNewPostText={postChange}
                                    addPostActionCreator={addPost}
                                    postsState={state.profilePage.postsState}
                                    newPostText={state.profilePage.newPostText}/>
                }
            }
        </storeContext.Consumer>);

}
export default MyPostsContainer;