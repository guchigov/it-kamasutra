import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let mapPostsData =
        props.postsData.map(postMessage => <Post message={postMessage.message} likescount={postMessage.likescount}/>);
    return (
        <div className={classes.mypost}>
            <div>
                <div><h3>My posts</h3></div>
                <div><textarea></textarea></div>

                <div>

                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.divPost}>
                {mapPostsData}
            </div>
        </div>

    );
}
export default MyPosts;