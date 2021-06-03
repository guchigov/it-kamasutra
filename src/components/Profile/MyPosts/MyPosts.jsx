import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post message='How are you?' likescount='3'/>
                <Post message='I learn React' likescount='10'/>
                <Post message='Hello' likescount='0'/>
                <Post message='I use react' likescount='100'/>
            </div>
        </div>

    );
}
export default MyPosts;