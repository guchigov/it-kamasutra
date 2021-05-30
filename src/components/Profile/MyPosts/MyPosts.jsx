import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div> My posts
            <div>
                <textarea></textarea>
                <div><button>Add post</button>
                <button>Remove</button>
                </div>
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>

    );
}
export default MyPosts;