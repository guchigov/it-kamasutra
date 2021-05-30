import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (

        <div className={classes.item}>
            <img src='https://topmsg.ru/wp-content/uploads/anonymous.jpg' alt='avatar picture'/>
            {props.message}
            <div>
                <span>like</span> {props.likescount}
            </div>
        </div>


    );
}
export default Post;