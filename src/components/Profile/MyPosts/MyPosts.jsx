import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let mapPostsData =
        props.stateProfilePage.postsState.map(postMessage => <Post message={postMessage.message} likescount={postMessage.likescount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let action = {type:"ADD-POST"};
        props.dispatch(action);

    }
    let postChange = () => {
        let text = newPostElement.current.value;
        let action = {type: "UPDATE-NEW-POST-TEXT", text: text};
        props.dispatch(action);

    }
    return (
        <div className={classes.mypost}>
            <div>
                <div><h3>My posts</h3></div>
                <div>
                    <textarea onChange={postChange} ref={newPostElement} value={props.stateProfilePage.newPostText}/>
                </div>

                <div>
                    <button onClick={() => {
                        addPost()
                    }}> Add post
                    </button>

                </div>
            </div>
            <div className={classes.divPost}>
                {mapPostsData}
            </div>
        </div>

    );
}
export default MyPosts;