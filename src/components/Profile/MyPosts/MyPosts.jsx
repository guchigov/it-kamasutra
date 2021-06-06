import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let PostsData = [
        {id: 1, message: 'How are you ?', likescount: 3},
        {id: 2, message: 'We will rock U', likescount: 10},
        {id: 3, message: 'Check my Git', likescount: 0},
        {id: 3, message: 'Check my Git', likescount: 0},
        {id: 3, message: 'Check my Git', likescount: 0},
        {id: 3, message: 'Check my Git', likescount: 0},
        {id: 3, message: 'Check my Git', likescount: 0},
        {id: 4, message: 'React is perfect', likescount: 100}
    ]
    let PostsDataServer =
        PostsData.map(postMessage => <Post message={postMessage.message} likescount={postMessage.likescount}/>);
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
                {PostsDataServer}
            </div>
        </div>

    );
}
export default MyPosts;