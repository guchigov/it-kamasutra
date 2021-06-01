import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div  className={classes.mypost}>
            <div>
                <div>My posts</div>
                <textarea></textarea>
                <div>

                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>

            <Post message='How are you?' likescount='3'/>
            <Post message='I learn React' likescount='10'/>
            <Post/>
            <Post/>
        </div>

    );
}
export default MyPosts;