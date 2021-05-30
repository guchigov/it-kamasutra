import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div> My posts
            <div>

                <textarea></textarea>
                <div>

                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>

            <Post message='How are you?' like='like 3'/>
            <Post message='I learn React' like='like 10'/>
            <Post/>
            <Post/>
        </div>

    );
}
export default MyPosts;