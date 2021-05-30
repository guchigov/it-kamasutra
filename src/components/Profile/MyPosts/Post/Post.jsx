import React from "react";
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src='https://topmsg.ru/wp-content/uploads/anonymous.jpg'/>
            Post 1
            <div><span>like</span></div>
        </div>


    );
}
export default Post;