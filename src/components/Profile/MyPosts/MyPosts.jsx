import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div> My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
                New post
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>

    );
}
export default MyPosts;