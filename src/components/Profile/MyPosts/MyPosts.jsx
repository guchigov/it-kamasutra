import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {updateNewPostText} from "../../../redux/state";

const MyPosts = (props) => {

    let mapPostsData =
        props.postsData.map(postMessage => <Post message={postMessage.message} likescount={postMessage.likescount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();

    }
    let postChange = () => {
        let text = newPostElement.current.value;
        updateNewPostText(text);
    }
    return (
        <div className={classes.mypost}>
            <div>
                <div><h3>My posts</h3></div>
                <div>
                    <textarea onChange={postChange} ref={newPostElement} value={props.newPostText}/>
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