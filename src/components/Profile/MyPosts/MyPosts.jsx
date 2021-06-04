import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let PostsData = [
        {id: 1, message: 'How are you ?', likescount: 3},
        {id: 2, message: 'We will rock U', likescount: 10},
        {id: 3, message: 'Check my Git', likescount: 0},
        {id: 4, message: 'React is perfect', likescount: 100}
    ]
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
                <Post message={PostsData[0].message} likescount={PostsData[0].likescount}/>
                <Post message={PostsData[1].message} likescount={PostsData[1].likescount}/>
                <Post message={PostsData[2].message} likescount={PostsData[2].likescount}/>
                <Post message={PostsData[3].message} likescount={PostsData[3].likescount}/>
            </div>
        </div>

    );
}
export default MyPosts;